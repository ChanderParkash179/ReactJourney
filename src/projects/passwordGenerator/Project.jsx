/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Heading from "./components/Heading";
import PasswordInput from "./components/PasswordInput";
import CopyButton from "./components/CopyButton";
import LengthRange from "./components/LengthRange";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";

function Project() {
  const [length, setLength] = useState(6);
  const [characters, setCharacter] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (characters) str += "~@#$%^&?!";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
    //
  }, [length, characters, numbers, setPassword]);

  const setLengthOnChange = (event) => {
    setLength(event.target.value);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, characters, numbers, passwordGenerator]);

  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const copyToClipboard = useCallback(() => {
    setCopyBtnText("Copied!");

    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="flex justify-center mt-36">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-6">
            <Heading />
            <PasswordInput password={password} ref={passwordRef} />
            <LengthRange length={length} onSetLength={setLengthOnChange} />
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultChecked={numbers}
                    onChange={() => {
                      setNumbers((prev) => !prev);
                    }}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Numbers
                </label>
              </div>
              <div className="flex items-end">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultChecked={characters}
                    onChange={() => {
                      setCharacter((prev) => !prev);
                    }}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Characters
                </label>
              </div>
            </div>
            <CopyButton copy={copyBtnText} copyClip={copyToClipboard} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
