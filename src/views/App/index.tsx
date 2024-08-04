/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import styles from "./index.module.scss";
import InputPlus from "../components/InputPlus";
import { useToDoStore } from "../../data/stores/useToDoStore";

const App: FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section></section>
    </article>
  );
};

export default App;
