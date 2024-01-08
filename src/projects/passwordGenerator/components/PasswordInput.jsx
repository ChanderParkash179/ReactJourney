/* eslint-disable react/prop-types */
function PasswordInput({ password, ref }) {
  return (
    <>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="text"
          name="password"
          placeholder="Password"
          id="password"
          value={password}
          ref={ref}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          readOnly
        />
      </div>
    </>
  );
}

export default PasswordInput;
