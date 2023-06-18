import { useState } from "react";
import HomePage from "./Components/Homepage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 onClick={() => setCount((count) => count + 1)}>Count is {count}</h1>
      <HomePage />
    </>
  );
}

export default App;
