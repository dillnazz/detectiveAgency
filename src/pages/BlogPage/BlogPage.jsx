import style from "./blogpage.module.scss";
import Pagination from "../../components/Pagination/Pagination";
import posts from "../../components/Post/posts";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function BlogPage() {
  return (
    <>
      <main className={style.page_container}>
      О нас
      </main>
    </>
  );
}
