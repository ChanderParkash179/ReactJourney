import { useState } from "react";
import styles from "./Main.module.css";

function Main() {
  let [counter, setCounter] = useState(0);

  const addCounter = () => {
    return setCounter(counter + 1);
  };

  const removeCounter = () => {
    if (counter === 0) return setCounter(0);
    return setCounter(counter - 1);
  };

  return (
    <>
      <div className={`${styles.container} text-center border`}>
        <h1 className="lead">{counter}</h1>
        <button
          className="border p-2 rounded bg-green-600 text-white"
          onClick={addCounter}
        >
          Add
        </button>
        <button
          className="border p-2 rounded bg-red-600 text-white"
          onClick={removeCounter}
        >
          Remove
        </button>
      </div>
    </>
  );
}
export default Main;
