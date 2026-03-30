import styles from "./Hero.module.css";
import HeroLogoCanvas from "./HeroLogoCanvas";
import { IconTeleSend, IconFolder } from "../icons/Icons";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowOrb} aria-hidden />
      <div className={styles.glowOrb2} aria-hidden />
      <div className={styles.content}>
        <span className={styles.brand}>DENTALION</span>
        <h1 className={styles.title}>УСЛУГИ КОДЕРА</h1>
        <p className={styles.subtitle}>
          Разработка под ключ и доработка проектов любой сложности
        </p>
        <p className={styles.description}>
          Создаю: сайты, ботов, софт, автоматизацию и Web3 решения.
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.primaryBtn}>
            <IconTeleSend className={styles.btnIcon} />
            <span>Написать в Telegram</span>
          </button>
          <button type="button" className={styles.secondaryBtn}>
            <IconFolder className={styles.btnIcon} />
            <span>Портфолио</span>
          </button>
        </div>
      </div>
      <div className={styles.preview}>
        <div className={styles.canvasShell} aria-label="3D логотип">
          <div className={styles.canvasAbove}>
            <HeroLogoCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
