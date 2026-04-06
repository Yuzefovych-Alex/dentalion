import { Suspense, use, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import styles from "./Partner.module.css";

const BASE = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
const MODEL_ROOT = `${BASE}/logo-3d/partner`;

const objModelPromises = new Map();

function loadPartnerObjWithMtl() {
  const key = MODEL_ROOT;
  if (objModelPromises.has(key)) return objModelPromises.get(key);

  const dir = `${MODEL_ROOT}/`;
  const promise = new Promise((resolve, reject) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath(dir);
    mtlLoader.load(
      "partner.mtl",
      (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(dir);
        objLoader.load("partner.obj", resolve, undefined, reject);
      },
      undefined,
      reject
    );
  });

  objModelPromises.set(key, promise);
  return promise;
}

function bakeModel(graph) {
  graph.traverse((child) => {
    if (!child.isMesh) return;

    child.frustumCulled = false;
    if (child.geometry?.computeVertexNormals) {
      child.geometry.computeVertexNormals();
    }

    const old = Array.isArray(child.material) ? child.material : [child.material];
    const next = old.map((m) => {
      let color = new THREE.Color(0xe6354d);
      if (m?.color) {
        color = m.color.clone();
        if (color.r + color.g + color.b < 0.06) color.setHex(0xe6354d);
      }
      return new THREE.MeshStandardMaterial({
        color,
        metalness: 0.22,
        roughness: 0.42,
        emissive: new THREE.Color(0x2a0810),
        emissiveIntensity: 0.28,
        side: THREE.DoubleSide,
      });
    });
    child.material = next.length === 1 ? next[0] : next;
  });
  return graph;
}

function PartnerMesh() {
  const loaded = use(useMemo(() => loadPartnerObjWithMtl(), []));
  const root = useRef(null);

  const scene = useMemo(() => {
    const g = loaded.clone(true);
    bakeModel(g);
    g.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(g);
    if (!box.isEmpty()) {
      const c = new THREE.Vector3();
      box.getCenter(c);
      g.position.sub(c);
    }
    return g;
  }, [loaded]);

  useFrame(() => {
    if (!root.current) return;
    root.current.rotation.z = Math.sin(performance.now() * 0.00035) * 0.06;
  });

  return (
    <group ref={root}>
      <primitive object={scene} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.62} />
      <hemisphereLight intensity={0.42} groundColor="#1a060c" color="#ffd0e0" />
      <directionalLight position={[6, 10, 8]} intensity={1.45} color="#ffaac4" />
      <directionalLight position={[-8, -4, 6]} intensity={0.55} color="#4a1830" />
      <pointLight position={[4, 2, 6]} intensity={32} color="#ff3355" distance={20} decay={2} />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.22} maxDuration={0.25}>
          <PartnerMesh />
        </Bounds>
      </Suspense>

      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.65}
        autoRotate
        autoRotateSpeed={0.9}
        target={[0, 0, 0]}
        minPolarAngle={Math.PI / 2 - 0.52}
        maxPolarAngle={Math.PI / 2 + 0.52}
      />
    </>
  );
}

export default function PartnerLogoCanvas() {
  return (
    <Canvas
      className={styles.canvas3d}
      camera={{ position: [5.2, 0.05, 5.2], fov: 42, near: 0.05, far: 200 }}
      dpr={[1, 2]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(0x000000, 0);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
        gl.outputColorSpace = THREE.SRGBColorSpace;
        scene.background = null;
      }}
    >
      <Scene />
    </Canvas>
  );
}
