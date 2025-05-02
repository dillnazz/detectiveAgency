import style from "./reviews.module.scss";
import reviews from "../../components/Review/review-array";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";

export default function Reviews(props) {
  return (
    <>
      <main className={style.page_container}>
        <section className={style.page_header}>
          <Breadcrumbs />
          <h3 className={style.page_title}>
            отзывы
          </h3>
        </section>

        <Pagination array={reviews} wrapper={style.page_block} />
      </main>
    </>
  );
}
