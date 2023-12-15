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
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
       
      </div>
    </>
  );
}

export default App;
