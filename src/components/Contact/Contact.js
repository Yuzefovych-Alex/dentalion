import styles from "./Contact.module.css";
import { IconTelegram, IconDiscord, IconMail, IconTeleSend } from "../icons/Icons";

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.ring} aria-hidden />
      <h2 className={styles.title}>Возникли вопросы или нужен проект?</h2>
      <button type="button" className={styles.cta}>
        <span className={styles.ctaGlow} aria-hidden />
        <IconTeleSend className={styles.ctaIcon} />
        <span>Связаться со мной</span>
      </button>
      <div className={styles.socials}>
        <button type="button" className={styles.socialBtn} aria-label="Telegram">
          <IconTelegram className={styles.socialIcon} />
        </button>
        <button type="button" className={styles.socialBtn} aria-label="Discord">
          <IconDiscord className={styles.socialIcon} />
        </button>
        <button type="button" className={styles.socialBtn} aria-label="Email">
          <IconMail className={styles.socialIcon} />
        </button>
      </div>
    </section>
  );
}
