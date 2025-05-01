import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import FormPhoto from "../../assets/images/form-foto.png";
import "./faq.scss";
import SecondModal from "../../components/SecondModal/SecondModal";

export default function FAQ() {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  const [active1, setActive1] = useState(false);

  const contentRef1 = useRef(null);

  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };

  const [active2, setActive2] = useState(false);

  const contentRef2 = useRef(null);

  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);

  const toggleAccordion2 = () => {
    setActive2(!active2);
  };

  const [active3, setActive3] = useState(false);

  const contentRef3 = useRef(null);

  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);

  const toggleAccordion3 = () => {
    setActive3(!active3);
  };

  const [active4, setActive4] = useState(false);

  const contentRef4 = useRef(null);

  useEffect(() => {
    contentRef4.current.style.maxHeight = active4
      ? `${contentRef4.current.scrollHeight}px`
      : "0px";
  }, [contentRef4, active4]);

  const toggleAccordion4 = () => {
    setActive4(!active4);
  };

  const [active5, setActive5] = useState(false);

  const contentRef5 = useRef(null);

  useEffect(() => {
    contentRef5.current.style.maxHeight = active5
      ? `${contentRef5.current.scrollHeight}px`
      : "0px";
  }, [contentRef5, active5]);

  const toggleAccordion5 = () => {
    setActive5(!active5);
  };

  return (
    <>
      <section className="container">
        <h3 className="h3">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>

        <div className="blok">
          <div className="question-blok">
            <button
              className={`question-section ${active}`}
              onClick={toggleAccordion}
            >
              <div>
                <div className="question-align">
                  <p className="question-style">
                    Какие услуги предоставляет ваше детективное агентство?
                  </p>
                  <FiPlus
                    className={
                      active ? `question-icon rotate` : `question-icon`
                    }
                  />
                </div>
                <div
                  ref={contentRef}
                  className={active ? `answer answer-divider` : `answer`}
                >
                  <p>
                    Мы предоставляем услуги по сбору информации, наблюдению, поиску людей, проверке
                    деловых партнёров, а также помощи в семейных и бракоразводных делах. Все действия
                    проводятся строго в рамках закона.
                  </p>
                </div>
              </div>
            </button>

            <button
              className={`question-section ${active1}`}
              onClick={toggleAccordion1}
            >
              <div>
                <div className="question-align">
                  <p className="question-style">
                    Является ли работа частного детектива законной в вашей стране?
                  </p>
                  <FiPlus
                    className={
                      active1 ? `question-icon rotate` : `question-icon`
                    }
                  />
                </div>
                <div
                  ref={contentRef1}
                  className={active1 ? `answer answer-divider` : `answer`}
                >
                  <p>
                    Да, работа частного детектива законна. Мы действуем в соответствии с законодательством
                    о частной детективной деятельности и соблюдаем все правовые нормы.
                  </p>
                </div>
              </div>
            </button>

            <button
              className={`question-section ${active2}`}
              onClick={toggleAccordion2}
            >
              <div>
                <div className="question-align">
                  <p className="question-style">
                    Могу ли я остаться анонимным при обращении?
                  </p>
                  <FiPlus
                    className={
                      active2 ? `question-icon rotate` : `question-icon`
                    }
                  />
                </div>
                <div
                  ref={contentRef2}
                  className={active2 ? `answer answer-divider` : `answer`}
                >
                  <p>
                    Абсолютно. Конфиденциальность клиента — наш главный приоритет. Вся информация, которую
                    вы предоставляете, защищена и не разглашается третьим лицам.
                  </p>
                </div>
              </div>
            </button>

            <button
              className={`question-section ${active3}`}
              onClick={toggleAccordion3}
            >
              <div>
                <div className="question-align">
                  <p className="question-style">
                    Сколько времени занимает расследование?
                  </p>
                  <FiPlus
                    className={
                      active3 ? `question-icon rotate` : `question-icon`
                    }
                  />
                </div>
                <div
                  ref={contentRef3}
                  className={active3 ? `answer answer-divider` : `answer`}
                >
                  <p>
                    Срок зависит от сложности и характера дела. Некоторые расследования занимают несколько
                    дней, другие — недели. Мы всегда стараемся работать оперативно, не жертвуя качеством.
                  </p>
                </div>
              </div>
            </button>
            <button
              className={`question-section ${active4}`}
              onClick={toggleAccordion4}
            >
              <div>
                <div className="question-align">
                  <p className="question-style">
                    Какие гарантии вы предоставляете?
                  </p>
                  <FiPlus
                    className={
                      active4 ? `question-icon rotate` : `question-icon`
                    }
                  />
                </div>
                <div
                  ref={contentRef4}
                  className={active4 ? `answer answer-divider` : `answer`}
                >
                  <p>
                    Мы гарантируем профессиональный подход, конфиденциальность и соблюдение закона.
                    Результаты зависят от множества факторов, но мы делаем всё возможное для успешного
                    исхода.
                  </p>
                </div>
              </div>
            </button>
            <button
              className={`question-section ${active5}`}
              onClick={toggleAccordion5}
            >
              <div>
                <div className="question-align">
                  <p className="question-style">
                    Сколько стоят ваши услуги?
                  </p>
                  <FiPlus
                    className={
                      active5 ? `question-icon rotate` : `question-icon`
                    }
                  />
                </div>
                <div
                  ref={contentRef5}
                  className={active5 ? `answer answer-divider` : `answer`}
                >
                  <p>
                    Стоимость зависит от типа услуги, её продолжительности и используемых ресурсов.
                    Предварительная консультация бесплатна, после чего мы предоставим вам точную смету.
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
