import { Link } from "react-router-dom";
import styles from "./Partner.module.css";
import contactStyles from "../Contact/Contact.module.css";
import PartnerLogoCanvas from "./PartnerLogoCanvas";
import { IconFolder, IconTeleSend, IconUser } from "../icons/Icons";

const benefits = [
  {
    title: "Скидки и бонусы",
    text: "Специальные условия для постоянных клиентов и рекомендаций.",
  },
  {
    title: "Приоритет в работе",
    text: "Быстрее стартуют задачи партнёров в очереди разработки.",
  },
  {
    title: "Прозрачные условия",
    text: "Фиксируем формат сотрудничества и сроки без скрытых платежей.",
  },
];

export default function Partner() {
  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden>
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
      </div>

      <section className={styles.hero}>
        <div className={styles.glowOrb} aria-hidden />
        <div className={styles.glowOrb2} aria-hidden />
        <div className={styles.content}>
          <span className={styles.brand}>DENTALION</span>
          <h1 className={styles.title}>ПАРТНЁРКА</h1>
          <p className={styles.subtitle}>
            Программа для пользователей: выгодные условия, поддержка и совместные проекты.
          </p>
          <p className={styles.description}>
            Оставьте заявку в Telegram — обсудим формат: реферальная модель, скидки на услуги или
            долгосрочное сотрудничество.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primaryBtn}
              href="https://t.me/Dentalion_Black"
              target="_blank"
              rel="noreferrer"
            >
              <IconTeleSend className={styles.btnIcon} />
              <span>Стать партнёром</span>
            </a>
            <Link to="/" className={styles.secondaryBtn}>
              <IconFolder className={styles.btnIcon} />
              <span>На главную</span>
            </Link>
          </div>
        </div>
        <div className={styles.preview}>
          <div className={styles.canvasShell} aria-label="3D модель партнёра">
            <div className={styles.canvasAbove}>
              <PartnerLogoCanvas />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что даёт партнёрка</h2>
        <div className={styles.grid}>
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className={styles.card}
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className={styles.cardIcon}>
                <IconUser className={styles.cardIconSvg} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={contactStyles.section}>
        <div className={contactStyles.ring} aria-hidden />
        <h2 className={contactStyles.title}>Готовы обсудить партнёрство?</h2>
        <a
          className={contactStyles.cta}
          href="https://t.me/Dentalion_Black"
          target="_blank"
          rel="noreferrer"
        >
          <span className={contactStyles.ctaGlow} aria-hidden />
          <IconTeleSend className={contactStyles.ctaIcon} />
          <span>Связаться со мной</span>
        </a>
      </section>
    </main>
  );
}
