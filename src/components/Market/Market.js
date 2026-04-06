import { Link } from "react-router-dom";
import styles from "./Market.module.css";
import { IconFolder, IconTag, IconTeleSend } from "../icons/Icons";

const products = [
  {
    title: "Parser Pro",
    price: "$120",
    type: "Desktop Tool",
    text: "Сбор данных с фильтрами, экспорт в CSV/JSON и анти-дубль модуль.",
    image: "/market-parser.svg",
  },
  {
    title: "Auto Sender TG",
    price: "$90",
    type: "Telegram Automation",
    text: "Рассылка по сценариям, лимиты отправки, логирование результатов.",
    image: "/market-autosender.svg",
  },
  {
    title: "Store Admin Kit",
    price: "$160",
    type: "Web Admin",
    text: "Готовая админка для товаров, заказов, статусов и аналитики продаж.",
    image: "/market-storekit.svg",
  },
  {
    title: "Wallet Checker",
    price: "$140",
    type: "Web3 Utility",
    text: "Массовая проверка адресов и балансов с отчетом по сетям.",
    image: "/market-wallet.svg",
  },
];

export default function Market() {
  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden>
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
      </div>

      <section className={styles.hero}>
        <span className={styles.brand}>DENTALION</span>
        <h1 className={styles.title}>МАРКЕТ ПРОГРАММ</h1>
        <p className={styles.subtitle}>
          Готовые решения для старта: покупаете и сразу используете.
        </p>
        <div className={styles.actions}>
          <a
            className={styles.primaryBtn}
            href="https://t.me/Dentalion_Black"
            target="_blank"
            rel="noreferrer"
          >
            <IconTeleSend className={styles.btnIcon} />
            <span>Купить через Telegram</span>
          </a>
          <Link to="/" className={styles.secondaryBtn}>
            <IconFolder className={styles.btnIcon} />
            <span>На главную</span>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Каталог</h2>
        <div className={styles.grid}>
          {products.map((item, index) => (
            <article
              key={item.title}
              className={styles.card}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={styles.previewWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.previewImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardTop}>
                <span className={styles.type}>{item.type}</span>
                <span className={styles.price}>
                  <IconTag className={styles.priceIcon} />
                  {item.price}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
              <a
                className={styles.buyBtn}
                href="https://t.me/Dentalion_Black"
                target="_blank"
                rel="noreferrer"
              >
                Купить
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
