/* eslint-disable react/prop-types */
function LengthRange({ length, onSetLength }) {
  return (
    <>
      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Length : {length}
      </label>
      <input
        id="default-range"
        type="range"
        value={length}
        min={6}
        max={36}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={onSetLength}
      />
    </>
  );
}

export default LengthRange;
