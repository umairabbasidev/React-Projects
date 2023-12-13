import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let conter = 5;
  let [Counter, setCounter] = useState(5);

  const addValue = () => {
    Counter = Counter + 1;
    setCounter(Counter);
    console.log("clicked", Counter);
  };

  const removeValue = () => {
    setCounter(Counter - 1);
    console.log(Counter);
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {Counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value {Counter}</button>
      <p>Footer{Counter}</p>
    </>
  );
}

export default App;
