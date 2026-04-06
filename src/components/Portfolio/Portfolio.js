import { Link } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { IconArrowOut, IconFolder, IconTag, IconTeleSend } from "../icons/Icons";

const projects = [
  {
    title: "CRM для стоматологии",
    type: "Web Platform",
    text: "Личный кабинет, учет пациентов, расписание и автоматические уведомления.",
    stack: "React, Node.js, PostgreSQL",
    image: "/project-crm.svg",
  },
  {
    title: "Telegram-бот для заявок",
    type: "Automation",
    text: "Прием заявок, фильтрация лидов, автоответы и интеграция с таблицами.",
    stack: "Telegram API, Python",
    image: "/project-bot.svg",
  },
  {
    title: "Сайт услуг под ключ",
    type: "Landing + CMS",
    text: "Продающий лендинг с анимациями, формами и удобной админкой.",
    stack: "React, CSS, REST API",
    image: "/project-site.svg",
  },
  {
    title: "Web3 мини-приложение",
    type: "Blockchain",
    text: "Подключение кошелька, проверка транзакций и интерфейс личного кабинета.",
    stack: "React, Ethers.js",
    image: "/project-web3.svg",
  },
];

export default function Portfolio() {
  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden>
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
      </div>

      <section className={styles.hero}>
        <span className={styles.brand}>DENTALION</span>
        <h1 className={styles.title}>ПОРТФОЛИО</h1>
        <p className={styles.subtitle}>
          Реальные задачи, аккуратная архитектура и результат под бизнес-цель.
        </p>
        <div className={styles.actions}>
          <a
            className={styles.primaryBtn}
            href="https://t.me/Dentalion_Black"
            target="_blank"
            rel="noreferrer"
          >
            <IconTeleSend className={styles.btnIcon} />
            <span>Обсудить проект</span>
          </a>
          <Link to="/" className={styles.secondaryBtn}>
            <IconFolder className={styles.btnIcon} />
            <span>На главную</span>
          </Link>
          <Link to="/market" className={styles.secondaryBtn}>
            <IconTag className={styles.btnIcon} />
            <span>Маркет</span>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Выбранные проекты</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={styles.card}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={styles.previewWrap}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.previewImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardTop}>
                <span className={styles.type}>{project.type}</span>
                <IconArrowOut className={styles.arrow} />
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardText}>{project.text}</p>
              <p className={styles.stack}>{project.stack}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
