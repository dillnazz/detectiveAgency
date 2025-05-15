import React from 'react';
import { Link } from "react-router-dom";
import style from './form.module.scss';

const Form = () => {
  // const title = "Акула";

  return (
    <div className={style.container}>
      <p className={style.text}>
        Частная детективная деятельность. Готовы предоставить вам качественные услуги.
      </p>
      <Link to="/contacts">
      <button className={style.button}>
        Связаться
      </button>
      </Link>
    </div>
  );
}

export default Form;
