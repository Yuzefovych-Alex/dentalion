import styles from "./TechStack.module.css";
import {
  IconCode,
  IconChip,
  IconReactAtom,
  IconVueTriangle,
  IconPython,
} from "../icons/Icons";

const stack = [
  { id: "js", label: "JavaScript", Icon: IconCode },
  { id: "node", label: "Node.js", Icon: IconChip },
  { id: "ts", label: "TypeScript", Icon: IconCode },
  { id: "react", label: "React", Icon: IconReactAtom },
  { id: "vue", label: "Vue", Icon: IconVueTriangle },
  { id: "py", label: "Python", Icon: IconPython },
  { id: "cpp", label: "C++", Icon: IconChip },
  { id: "cs", label: "C#", Icon: IconChip },
];

function Track({ suffix }) {
  return (
    <>
      {stack.map((item) => {
        const { Icon } = item;
        return (
          <div key={`${item.id}-${suffix}`} className={styles.badge}>
            <Icon className={styles.badgeIcon} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </>
  );
}

export default function TechStack() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Стек технологий</h2>
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <Track suffix="a" />
          <Track suffix="b" />
        </div>
      </div>
    </section>
  );
}
