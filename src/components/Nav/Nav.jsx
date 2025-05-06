import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Vectordown } from "../../assets/images/vectordown.svg";
// import { ReactComponent as Vectordown2 } from "../../assets/images/bxs_chevron-down.svg";
import { ReactComponent as Vectorright } from "../../assets/images/bxs_chevron-right.svg";
import styled from "styled-components";
import style from "./nav.module.scss";
import ModalServices from "../../components/ModalServices/ModalServices";
import Phone from "../../assets/images/gg_phone.svg";
import Telegram from "../../assets/images/telegram.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  column-gap: 1rem;

  a {
    text-decoration: none;
  }

  @media (max-width: 1230px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    z-index: 30;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 88px;
    left: 0;
    right: 0;
    padding: 24px 40px;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    z-index: 30;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 65px;
    left: 0;
    right: 0;
    padding: 24px 16px;
    height: 812px;
    transition: transform 0.3s ease-in-out;
    margin: 0;
  }
`;

const Nav = ({ open, closeMenu }) => {
  const [showModal, setShowModal] = useState(false);
  const [isIconModalUp, setIsIconModalUp] = useState(false);

  const handleModalClick = () => {
    setShowModal(!showModal);
    setIsIconModalUp(!isIconModalUp);
  };

  const Check = () => {
    setShowModal();
  };

  return (
    <nav className={style.nav}>
      <div
        className={`${style["menu-background"]} ${open ? style["dark"] : ""}`}
      >
        <Ul open={open}>
          {showModal && <ModalServices stateMenu={setShowModal} />}
          <Link to="/">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Главная {""}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>
          <Link to="/blog">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              О нас{" "}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>
          <Link to="/services">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Услуги{" "}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>
          {/* <Link to="/reviews">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Отзывы{" "}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link> */}
          <Link to="/contacts">
            <li
              className={style.li}
              onClick={() => {
                Check();
                closeMenu();
              }}
            >
              Контакты{" "}
              <div className={style.right}>
                <Vectorright />
              </div>
            </li>
          </Link>

          <div className={style.navcontainer}>
            <div className={style.container_medium}>
              <img src={Phone} alt="phone" className={style.phone} />
              <div className={style.container_small}>
                <p className={style.number}>+996 504 555 811</p>
                <p className={style.timevisit}>Ежедневно с 8:00 до 22:00</p>
              </div>
            </div>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <img src={Telegram} alt="Telegram" className={style.telegram} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <img src={WhatsApp} alt="WhatsApp" className={style.whatsapp} />
            </a>
          </div>
        </Ul>
      </div>
    </nav>
  );
};

export default Nav;
