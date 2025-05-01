import style from "./blogpage.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function BlogPage() {
  return (
    <>
      <main className={style.page_container}>
        <section className={style.page_header}>
          <Breadcrumbs />
          <h3 className={style.page_title}>О нас</h3>
        </section>

        <section className={style.about_section}>
          <div className={style.image_container}>
          </div>
          <div className={style.text_container}>
            <h2>Мы создаём решения, которые работают</h2>
            <p>
              Наша команда — это союз профессионалов, объединённых целью делать жизнь людей проще.
              Мы верим в технологии, ответственность и честность. С 2020 года мы помогаем клиентам находить
              надёжных специалистов и получать качественные услуги в один клик.
            </p>
            <p>
              Мы стремимся к инновациям, ценим доверие и всегда на стороне клиента.
              У нас — простота, прозрачность и забота.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
