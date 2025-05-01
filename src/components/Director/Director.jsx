import style from "./director.module.scss";
import WorkHistory from "../../assets/images/work-history.svg";
import Vectorright from "../../assets/svg/Vectorright.jsx";
import Popup from "../Popup/Popup.jsx";
import SecondModal from "../SecondModal/SecondModal.jsx";
import { useState } from "react";

export default function Director() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SecondModal HowToReachUs={true} />
      </Popup>
      <section className={style.container}>
        <div className={style.backgroundsmall}></div>
        <div className={style.blok}>
          <div className={style.about}>
            <p className={style.title}>Руководитель детективного агентства</p>
            <h3 className={style.h3}>Ийманбеков Камил Ийманбекович</h3>
          </div>
          <p className={style.text}>
            Ийманбеков Камил Ийманбекович
            Руководитель и представитель агентства — Ийманбеков Камил Ийманбекович — обладает многолетним опытом в области частных расследований и безопасности. Камил Ийманбекович активно сотрудничает с рядом авторитетных частных агентств, участвует в профильных международных конференциях и ассоциациях, что позволяет ему внедрять в свою работу лучшие мировые практики.

            Главный принцип его работы — полная прозрачность и доказательная база: клиенты получают не только устные консультации, но и детальные документированные отчёты по каждому делу.

            Камил Ийманбекович регулярно делится своими знаниями и опытом через экспертные статьи, обучающие семинары и выступления в медиа, помогая людям лучше ориентироваться в вопросах личной и корпоративной безопасности.
          </p>
          <button
            type="submit"
            className={style.button}
            onClick={() => setButtonPopup(true)}
          >
            Записаться на консультацию
            <div className={style.vector}>
              <Vectorright />
            </div>
          </button>
        </div>

        <div className={style.background}></div>
      </section>
    </>
  );
}
