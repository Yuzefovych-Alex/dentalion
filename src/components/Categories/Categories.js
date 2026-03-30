import styles from "./Categories.module.css";
import { IconTag } from "../icons/Icons";

const categories = [
  "APK",
  "Bots",
  "Development",
  "IT",
  "Games",
  "Casino",
  "Frontend",
  "FullStack",
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Категории</h2>
      <div className={styles.list}>
        {categories.map((item, index) => (
          <span
            key={item}
            className={styles.tag}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <IconTag className={styles.tagIcon} />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
