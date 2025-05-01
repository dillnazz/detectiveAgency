import React from 'react';
import style from './form.module.scss';

const Form = () => {
  const title = "Akula";

  return (
    <div className={style.container}>
      <h1 className={style.title}>
        {title.split('').map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
      <p className={style.text}>
        Частное детективное агентство. Всегда готовы оказать вам качественную услугу
      </p>
      <button className={style.button}>
        Связаться
      </button>
    </div>
  );
}

export default Form;
