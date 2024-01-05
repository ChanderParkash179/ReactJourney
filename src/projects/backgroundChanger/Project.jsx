/* eslint-disable no-unused-vars */
import { useState } from "react";
import ColorButton from "./components/ColorButton";

function Project() {
  const [color, setColor] = useState("olive");

  const colors = [
    "olive",
    "red",
    "blue",
    "yellow",
    "orange",
    "violet",
    "purple",
  ];

  const onSetClick = (col) => {
    setColor(col);
  };

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
          <ColorButton colors={colors} onSetClick={onSetClick} />
        </div>
      </div>
    </>
  );
}

export default Project;
