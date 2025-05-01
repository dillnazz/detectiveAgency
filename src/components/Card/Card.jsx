import { Link } from "react-router-dom";
import style from "./card.module.scss";

export default function Card(props) {
  return (
    <div className={`${style.card}`} key={`${props.id}`}>
    <h1></h1>
      <Link to="/services_for_individuals/geolocation">
        <p className={`${style.card_title}`}>{props.title}</p>
      </Link>
      <p className={`${style.card_text}`}>{props.text}</p>
      <div className={`${style.card_price_container}`}>
        <Link to="/services_for_individuals/geolocation">
        </Link>
      </div>
    </div>
  );
}
