import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import HeroLogoCanvas from "./HeroLogoCanvas";
import { IconTeleSend, IconUser } from "../icons/Icons";

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
          <a
            className={styles.primaryBtn}
            href="https://t.me/Dentalion_Black"
            target="_blank"
            rel="noreferrer"
          >
            <IconTeleSend className={styles.btnIcon} />
            <span>Написать в Telegram</span>
          </a>
          {/* 
          <Link to="/portfolio" className={styles.secondaryBtn}>
            <IconFolder className={styles.btnIcon} />
            <span>Портфолио</span>
          </Link>
          <Link to="/market" className={styles.secondaryBtn}>
            <IconTag className={styles.btnIcon} />
            <span>Маркет</span>
          </Link>
          */}
          <Link to="/partner" className={styles.secondaryBtn}>
            <IconUser className={styles.btnIcon} />
            <span>Партнёрка</span>
          </Link>
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
