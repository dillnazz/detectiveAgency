// import style from "./safety.module.scss";

// export default function Safety() {
//   return (
//     <>
//       <section className={style.container}>
//         <h3 className={style.h3}>Мы гарантируем сохранять в тайне</h3>
//         <div className={style.blok}>
//           <ul className={style.ul}>
//             <li className={style.li}>Персональные данные Заказчика</li>
//             <li className={style.li}>
//               Любую приватную информацию, относящуюся к делу
//             </li>
//             <li className={style.li}>Коммерческую тайну</li>
//             <li className={style.li}>Результаты нашей деятельности</li>
//             <li className={style.li}>
//               Договор об оказании услуг (уничтожается)
//             </li>
//             <li className={style.li}>
//               Факт посещения человеком офиса (любого его присутствия)
//             </li>
//             <li className={style.li}>Стоимость контракта об оказании услуг</li>
//             <li className={style.li}>
//               Материалы сообщений, контакты и отчеты (безвозвратное удаление)
//             </li>
//           </ul>
//         </div>
//       </section>
//     </>
//   );
// }


import { ShieldCheck, UserX, FileMinus, EyeOff, Lock, Fingerprint } from "lucide-react";
import style from "./safety.module.scss";

const safetyData = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Конфиденциальность",
    description: "Все ваши данные и обращения остаются строго между нами. Никакая информация не передаётся третьим лицам.",
  },
  {
    icon: <UserX size={32} />,
    title: "Анонимность",
    description: "Вы можете обратиться к нам, не раскрывая свою личность. Ваше имя и личность под надёжной защитой.",
  },
  {
    icon: <FileMinus size={32} />,
    title: "Удаление данных",
    description: "После завершения дела все материалы: фото, переписки, отчёты — безвозвратно удаляются с наших носителей.",
  },
  {
    icon: <EyeOff size={32} />,
    title: "Невидимость",
    description: "Ваш визит, контакт или сотрудничество с агентством не фиксируется и не подлежит огласке.",
  },
  {
    icon: <Lock size={32} />,
    title: "Юридическая защита",
    description: "Вся работа проводится строго в рамках закона. Мы заботимся о вашей безопасности и легальности.",
  },
  {
    icon: <Fingerprint size={32} />,
    title: "Без следов",
    description: "Мы не оставляем цифровых и физических следов после завершения работы. Полная чистота действий.",
  }
];

export default function Safety() {
  return (
    <section className={style.container}>
      <h3 className={style.heading}>Наша работа — это ваша уверенность</h3>
      <div className={style.grid}>
        {safetyData.map((item, index) => (
          <div key={index} className={style.card}>
            <div className={style.icon}>{item.icon}</div>
            <h4 className={style.title}>{item.title}</h4>
            <p className={style.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
