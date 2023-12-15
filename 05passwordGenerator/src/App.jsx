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
if(characterAllowed) str+= "@#$%&*";


for (let i = 1; i < str.length; i++) {
let char = Math.floor(Math.random().str.length + 1)
  
}
pass = str.charAt(char)

  }, [
    length,
    nuberAllowed,
    characterAllowed,
    setPassword,
  ]);

  setPassword(pass)
  return (
    <>
      <h1 className="text-4xl text-center text-white py-2">
        Password Generator
      </h1>
    </>
  );
}

export default App;
