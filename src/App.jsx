import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);

    return names[int];
  };

  return (
    <>
      <p>Hello {handleNameChange()}!</p>
    </>
  );
}

export default App;
