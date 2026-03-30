import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import TechStack from "./components/TechStack/TechStack";
import Reasons from "./components/Reasons/Reasons";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden>
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
        <span className={styles.spark} />
        <span className={styles.spark2} />
      </div>
      <Hero />
      <Services />
      <TechStack />
      <Reasons />
      <Categories />
      <Contact />
    </main>
  );
}

export default App;
