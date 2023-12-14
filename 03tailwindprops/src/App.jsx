import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import "./App.css";

function App() {
  let obj = {
    name: "umair",
    age: 21,
  };
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div>
        <h1 className="text-black bg-green-500 rounded-lg p-2 mb-2">
          Tailwind Test
        </h1>
      </div>
      <div className="flex justify-between flex-wrap">
        <div>
          <Card username="Umair Abbasi" btn="visit" />
        </div>
        <div className="mx-2">
          <Card username="Uzair Abbasi" btn="Contact" />
        </div>
        <div>
          <Card username="Asadullah Abbas"  />
        </div>
      </div>
    </>
  );
}

export default App;
