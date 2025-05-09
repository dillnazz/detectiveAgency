import React, { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Burger from "../Nav/Burger.jsx";
// import Logo from "../../assets/images/logo-akula.png";
import Phone from "../../assets/images/phone.svg";
import Telegram from "../../assets/images/telegram.svg";
import WhatsApp from "../../assets/images/whatsapp.svg";
import style from "./header.module.scss";
import "./sticky.scss";

function Header() {
  const headerRef = useRef();

  useLayoutEffect(() => {
    const handleScroll = () => {
      const headerElement = headerRef.current;
      const isSticky = window.scrollY > headerElement.offsetTop;

      if (isSticky) {
        headerElement.classList.add("sticky");
      } else {
        headerElement.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <div className={style.header}>
          {/* <Link to="/React-Detective">
            <img src='https://pngimg.com/d/shark_PNG18820.png' alt="logo" className={style.logo} />
          </Link> */}
          <Burger />
          <div className={style.container}>
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
        </div>
      </header>
    </>
  );
}

export default Header;
