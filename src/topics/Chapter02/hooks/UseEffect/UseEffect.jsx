/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function UseEffect() {
  // Initializing state variable 'counter' with an initial value of 0
  let [counter, setCounter] = useState(0);

  // useEffect hook - continuously updates the document title with the current counter value
  useEffect(() => {
    document.title = counter;
  });

  // useEffect hook - runs only once upon initial component mount, setting the document title to the initial counter value
  useEffect(() => {
    document.title = counter;
  }, []);

  // useEffect hook - runs whenever the 'counter' state variable changes, updating the document title accordingly
  useEffect(() => {
    document.title = counter;
  }, [counter]);

  const addCounter = () => {
    return setCounter(counter + 1);
  };

  const removeCounter = () => {
    if (counter === 0) return setCounter(0);
    return setCounter(counter - 1);
  };

  return (
    <>
      <div className="flex justify-center mt-12">
        <div className="w-1/2 text-center border p-12 bg-black text-white rounded-xl">
          <h1 className="text-4xl">{counter}</h1>
          <button
            className="border m-2 p-2 rounded bg-green-600 text-white"
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
      </div>
    </>
  );
}
export default UseEffect;
