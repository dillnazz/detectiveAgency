import style from "./footer.module.scss";
import { Link } from "react-router-dom";
import Location from "../../assets/images/footer-location.svg";
import Phone from "../../assets/images/footer-phone.svg";
import Time from "../../assets/images/footer-time.svg";
import Email from "../../assets/images/footer-email.svg";


export default function Footer() {
  return (
    <>
      <footer className={style.container}>
        <div className={style.blokmain}>
          <div className={style.blokmain1}>
            <div className={style.contact}>
              <p className={style.title}>Контакты</p>

              <div className={style.section}>
                <img src={Location} alt="Location" className={style.icon} />
                <p className={style.adress}>
                  г. Бишкек
                </p>
              </div>

              <div className={style.section}>
                <img src={Phone} alt="Phone" className={style.icon} />
                <p className={style.p}>+996 504 555 811</p>
              </div>

              <div className={style.section}>
                <img src={Time} alt="Time" className={style.icon} />
                <p className={style.p}>Понедельник-суббота 8:00-18:00</p>
              </div>

              <div className={style.section}>
                <img src={Email} alt="Email" className={style.icon} />
                <p className={style.p}>swedenkalmar@gmail.com</p>
              </div>
            </div>

            {/* <div className={style.card}>
              <img src={Mir} alt="Mir" className={style.cardicon} />
              <img src={Visa} alt="Visa" className={style.cardicon} />
              <img
                src={Mastercard}
                alt="Mastercard"
                className={style.cardicon}
              />
            </div> */}
          </div>

          <div className={style.blokmain2}>
            <p className={style.title}>Для бизнеса</p>
            <Link to="/">
              <p className={style.p}>Сбор информации для деловых переговоров</p>{" "}
            </Link>
            <Link to="/">
              <p className={style.p}>Проверки</p>{" "}
            </Link>
            <Link to="/">
              <p className={style.p}>Взыскания долгов</p>{" "}
            </Link>
            <Link to="/">
              <p className={style.p}>Разведка</p>{" "}
            </Link>
            <Link to="/">
              <p className={style.p}>Защита и безопасность</p>{" "}
            </Link>
            <Link to="/">
              <p className={style.p}>Расследования</p>{" "}
            </Link>
          </div>

          <div className={style.blokmain3}>
            <p className={style.title}>Для частных лиц</p>
            <Link to="/">
              <p className={style.p}>Досье на человека</p>
            </Link>
            <Link to="/">
              <p className={style.p}>Сбор сведений по гражданским, и по уголовным делам</p>
            </Link>
            <Link to="/">
              <p className={style.p}>Cбор информации о человеке

</p>
            </Link>
            <Link to="/">
              <p className={style.p}>Наблюдение за подростком</p>
            </Link>
            <Link to="/">
              <p className={style.p}>Установление образа жизни человека</p>
            </Link>
            <Link to="/">
              <p className={style.p}>Организация слежки

</p>
            </Link>
            <Link to="/">
              <p className={style.p}>Поиск без вести пропавших граждан</p>
            </Link>
          </div>

          <div className={style.blokmain4}>
            <p className={style.title}>Меню</p>
            {/* <Link to="/blog">
              <p className={style.p}>Блог</p>
            </Link> */}
            {/* <Link to="/reviews">
              <p className={style.p}>Отзывы</p>
            </Link> */}
            <Link to="/contacts">
              <p className={style.p}>Контакты</p>
            </Link>
            <Link to="/services_for_individuals">
              <p className={style.p}>Услуги</p>
            </Link>
            {/* <Link to="/price">
              <p className={style.p}>Цены</p>
            </Link> */}
          </div>
        </div>

      </footer>
    </>
  );
}
