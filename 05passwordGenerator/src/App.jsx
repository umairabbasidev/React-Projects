import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [nuberAllowed,setNumberAllowed]  = useState(false)

  return (
    <>
      <h1 className="text-4xl text-center text-white py-2">
        Password Generator
      </h1>
    </>
  );
}

export default App;
