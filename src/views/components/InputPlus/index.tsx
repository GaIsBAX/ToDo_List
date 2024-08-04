import { FC, useCallback, useState } from "react";
import styles from "./index.module.scss";

interface InputPlusProps {
  onAdd: (title: string) => void;
}

const InputPlus: FC<InputPlusProps> = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const addTask = useCallback(() => {
    onAdd(value);
    setValue("");
  }, [onAdd, value]);

  return (
    <div className={styles.inputPlus}>
      <input
        type="text"
        className={styles.inputPlusValue}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        placeholder="Type here..."
      />
      <button
        onClick={addTask}
        aria-label="Add"
        className={styles.inputPlusButton}
      />
    </div>
  );
};

export default InputPlus;
