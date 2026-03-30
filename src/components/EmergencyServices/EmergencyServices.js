import React from "react";
import styles from "./EmergencyServices.module.css";

export default function EmergencyServices () {
    return (
        <div className={styles.emergencyServices}>
            <div className={styles.emergencyServices__container}>
                <h3 className={styles.emergencyServices__container__title}>Бистрие услуги</h3>
                <ul className={styles.emergencyServices__container__list}>
                    <li className={styles.emergencyServices__container__list__item}>
                        <div className={styles.emergencyServices__container__list__item__icon}></div>
                        <h4 className={styles.emergencyServices__container__list__item__title}>САЙТЫ</h4>
                        <div className={styles.emergencyServices__container__list__item__description}>
                            Лендинг, магазины, админки, сложние проекты
                        </div>
                    </li>
                    <li className={styles.emergencyServices__container__list__item}>
                        <div className={styles.emergencyServices__container__list__item__icon}></div>
                        <h4 className={styles.emergencyServices__container__list__item__title}>САЙТЫ</h4>
                        <div className={styles.emergencyServices__container__list__item__description}>
                            Лендинг, магазины, админки, сложние проекты
                        </div>
                    </li>
                    <li className={styles.emergencyServices__container__list__item}>
                        <div className={styles.emergencyServices__container__list__item__icon}></div>
                        <h4 className={styles.emergencyServices__container__list__item__title}>САЙТЫ</h4>
                        <div className={styles.emergencyServices__container__list__item__description}>
                            Лендинг, магазины, админки, сложние проекты
                        </div>
                    </li>
                    <li className={styles.emergencyServices__container__list__item}>
                        <div className={styles.emergencyServices__container__list__item__icon}></div>
                        <h4 className={styles.emergencyServices__container__list__item__title}>САЙТЫ</h4>
                        <div className={styles.emergencyServices__container__list__item__description}>
                            Лендинг, магазины, админки, сложние проекты
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}