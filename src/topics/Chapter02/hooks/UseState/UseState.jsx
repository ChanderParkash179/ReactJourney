import { useState } from "react";

function UseState() {
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
      <div className="w-1/2 text-center border">
        <h1 className="text-4xl">{counter}</h1>
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
export default UseState;
