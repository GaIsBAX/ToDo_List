import { FC } from "react";
import styles from "./index.module.scss";

const App: FC = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}></section>
      <section></section>
    </article>
  );
};

export default App;
