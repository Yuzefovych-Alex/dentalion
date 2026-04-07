import { Link } from "react-router-dom";
import styles from "./Partner.module.css";
import contactStyles from "../Contact/Contact.module.css";
import PartnerLogoCanvas from "./PartnerLogoCanvas";
import {
  IconArrowOut,
  IconBolt,
  IconChip,
  IconFolder,
  IconGear,
  IconShield,
  IconSpark,
  IconTag,
  IconTeleSend,
  IconUser,
} from "../icons/Icons";

const programSections = [
  {
    number: "1",
    title: "Общие положения",
    Icon: IconUser,
    items: [
      "Партнёрская программа предназначена для сотрудничества с лицами, которые привлекают клиентов на услуги разработки (кодинга).",
      "Участником программы может стать любой человек, готовый привлекать заказы или клиентов.",
    ],
  },
  {
    number: "2",
    title: "Суть партнёрства",
    Icon: IconBolt,
    lead: "Партнёр получает вознаграждение за:",
    items: ["передачу заказов", "привлечение новых клиентов"],
    footer:
      "Если клиент пришёл по рекомендации партнёра или через его канал (ссылка, личное сообщение, соцсети и т.д.), такой клиент закрепляется за партнёром.",
  },
  {
    number: "3",
    title: "Вознаграждение",
    Icon: IconTag,
    items: [
      "Партнёр получает процент с каждого оплаченного заказа, пришедшего через него.",
      "Фиксированный процент с заказа (5–10%).",
      "Фиксированная сумма за клиента.",
      "Индивидуальные условия для крупных партнёров.",
    ],
  },
  {
    number: "4",
    title: "Учёт клиентов",
    Icon: IconChip,
    highlight: true,
    highlightTitle: "Клиент считается закреплённым за партнёром, если:",
    items: [
      "он напрямую указал партнёра;",
      "переписка / доказательства подтверждают источник;",
      "заказ пришёл через уникальный контакт партнёра.",
    ],
  },
  {
    number: "5",
    title: "Выплаты",
    Icon: IconGear,
    items: [
      "Выплаты партнёру производятся после получения оплаты от клиента.",
      "В оговорённые сроки (например, раз в неделю или по запросу).",
      "Способ оплаты обсуждается индивидуально.",
    ],
  },
  {
    number: "6",
    title: "Ограничения",
    Icon: IconShield,
    lead: "Запрещается:",
    items: [
      "спам и навязчивое привлечение клиентов;",
      "введение клиентов в заблуждение;",
      "использование фейковых заказов.",
    ],
    warning:
      "При нарушении условий участие в программе может быть прекращено.",
  },
  {
    number: "7",
    title: "Дополнительно",
    Icon: IconSpark,
    lead: "Для активных партнёров возможны:",
    items: [
      "повышенные проценты;",
      "приоритет в работе;",
      "долгосрочное сотрудничество.",
    ],
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

      <section className={styles.program} aria-labelledby="partner-program-heading">
        <div className={styles.programShell}>
          <div className={styles.programShellRing} aria-hidden />
          <div className={styles.programHeader}>
            <span className={styles.programEyebrow}>Условия сотрудничества</span>
            <h2 id="partner-program-heading" className={styles.programMainTitle}>
              Партнёрская программа
            </h2>
            <p className={styles.programIntro}>
              Ниже — условия сотрудничества по разделам. Перед стартом всё можно уточнить в Telegram.
            </p>
          </div>
          <div className={styles.programGrid}>
            {programSections.map((block, index) => {
              const { Icon } = block;
              return (
                <article
                  key={block.number}
                  className={
                    block.highlight
                      ? `${styles.programCard} ${styles.programCardHighlight}`
                      : styles.programCard
                  }
                  style={{ animationDelay: `${index * 0.07}s` }}
                >
                  <div className={styles.programCardTop}>
                    <div className={styles.programIconBox}>
                      <Icon className={styles.programIconSvg} />
                      <span className={styles.programStepNum} aria-hidden>
                        {block.number}
                      </span>
                    </div>
                    <span className={styles.programCorner} aria-hidden>
                      <IconArrowOut className={styles.programCornerSvg} />
                    </span>
                  </div>
                  <h3 className={styles.programCardTitle}>{block.title}</h3>
                  {block.highlight && block.highlightTitle ? (
                    <p className={styles.programHighlightLabel}>{block.highlightTitle}</p>
                  ) : null}
                  {block.lead ? <p className={styles.programItemLead}>{block.lead}</p> : null}
                  <ul className={styles.programList}>
                    {block.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  {block.footer ? <p className={styles.programFooter}>{block.footer}</p> : null}
                  {block.warning ? (
                    <p className={styles.programWarning} role="note">
                      {block.warning}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
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
