/* eslint-disable react/prop-types */
function ColorButton({ colors, onSetClick }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        {colors.map((c) => (
          <button
            key={c}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: c }}
            onClick={() => onSetClick(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </>
  );
}

export default ColorButton;
