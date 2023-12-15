import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [nuberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (nuberAllowed) str += "0123456789";
    if (characterAllowed) str += "@#$%&*";

    for (let i = 1; i < str.length; i++) {
      let char = Math.floor(Math.random().str.length + 1);

      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, nuberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center text-2xl my-3">
          Passord Generator
        </h1>
        <div className="flex shadow  rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 ">
            <div>
              <input
                type="checkbox"
                name=""
                id="numberInput"
                defaultChecked={nuberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className="mx-1">
                Numbers{nuberAllowed}
              </label>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <div>
              <input
                type="checkbox"
                id="characterInput"
                defaultChecked={characterAllowed}
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
            </div>
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
