import styles from "./contacts.module.scss";
import { ReactComponent as Phone } from "../../assets/images/footer-phone.svg";
import { ReactComponent as Location } from "../../assets/images/footer-location.svg";
import { ReactComponent as Telegram } from "../../assets/images/contact-telegram.svg";
import { ReactComponent as Whatsapp } from "../../assets/images/contact-whatsapp.svg";
import contactImage from "../../assets/images/moscow.png"; 
export default function Contacts() {
  return (
    <main className={styles.container}>
      <section className={styles.infoSection}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>Свяжитесь с нами</h1>
          <p className={styles.subtext}>
            Мы всегда на связи и готовы ответить на ваши вопросы.
          </p>

          <div className={styles.contactBlock}>
            <Phone className={styles.icon} />
            <div>
              <p className={styles.label}>Телефон</p>
              <p className={styles.value}>+996 504 555 811</p>
            </div>
          </div>

          <div className={styles.contactBlock}>
            <Location className={styles.icon} />
            <div>
              <p className={styles.label}>Адрес</p>
              <p className={styles.value}>ул. Александра Солженицына 42, Москва</p>
            </div>
          </div>

          <div className={styles.messengerBlock}>
            <h2 className={styles.subheading}>Мессенджеры</h2>

            <a href="https://t.me/pershin_detective" target="_blank" rel="noreferrer" className={styles.messengerLink}>
              <Telegram className={styles.icon} />
              <span>@pershin_detective</span>
            </a>

            <a href="https://api.whatsapp.com/send?phone=79686868685" target="_blank" rel="noreferrer" className={styles.messengerLink}>
              <Whatsapp className={styles.icon} />
              <span>+7 968 686 8685</span>
            </a>
          </div>
        </div>

        <div className={styles.imageContent}>
          <img src={contactImage} alt="Контакты" className={styles.image} />
        </div>
      </section>
    </main>
  );
}
