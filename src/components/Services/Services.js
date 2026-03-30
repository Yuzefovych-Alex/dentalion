import styles from "./Services.module.css";
import {
  IconLaptop,
  IconBot,
  IconGear,
  IconMobile,
  IconArrowOut,
} from "../icons/Icons";

const services = [
  {
    title: "САЙТЫ",
    text: "Лендинги, магазины, админки, сложные проекты",
    Icon: IconLaptop,
  },
  {
    title: "TELEGRAM-БОТЫ",
    text: "Автобайинг, парсеры, системы",
    Icon: IconBot,
  },
  {
    title: "СОФТ",
    text: "Программы под любые задачи",
    Icon: IconGear,
  },
  {
    title: "МОБИЛКИ",
    text: "iOS / Android приложения",
    Icon: IconMobile,
  },
];

export default function Services() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Быстрые услуги</h2>
      <div className={styles.grid}>
        {services.map((item, index) => {
          const { Icon } = item;
          return (
            <article
              key={item.title}
              className={styles.card}
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className={styles.cardTop}>
                <div className={styles.icon}>
                  <Icon className={styles.iconSvg} />
                </div>
                <span className={styles.corner} aria-hidden>
                  <IconArrowOut className={styles.cornerSvg} />
                </span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
