import { useReducer } from "react";
import reducer from "./reducer";

function UseReducer() {
  const initialValue = 0;

  let [counter, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div className="flex justify-center mt-12">
        <div className="w-1/2 text-center border p-12 bg-black text-white rounded-xl">
          <h1 className="text-4xl">{counter}</h1>
          <button
            className="border m-2 p-2 rounded bg-green-600 text-white"
            onClick={() => dispatch({ type: "INC" })}
          >
            Add
          </button>
          <button
            className="border p-2 rounded bg-red-600 text-white"
            onClick={() => dispatch({ type: "DEC" })}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
export default UseReducer;
