import styles from "./Reasons.module.css";
import { IconSpark, IconUser, IconBolt, IconShield } from "../icons/Icons";

const reasons = [
  {
    title: "Опыт более 3 лет",
    text: "Отказов в ТЗ нет, работаю аккуратно.",
    Icon: IconSpark,
  },
  {
    title: "Индивидуальный подход",
    text: "Подбираю лучший путь под задачу.",
    Icon: IconUser,
  },
  {
    title: "Быстрые сроки",
    text: "Запускаю MVP и дорабатываю по этапам.",
    Icon: IconBolt,
  },
  {
    title: "Работа с гарантом",
    text: "Безопасные сделки и прозрачные условия.",
    Icon: IconShield,
  },
];

export default function Reasons() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Почему меня выбирают</h2>
      <div className={styles.grid}>
        {reasons.map((item, index) => {
          const { Icon } = item;
          return (
            <article
              key={item.title}
              className={styles.card}
              style={{ animationDelay: `${0.06 + index * 0.08}s` }}
            >
              <div className={styles.iconWrap}>
                <Icon className={styles.iconSvg} />
              </div>
              <div className={styles.copy}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
