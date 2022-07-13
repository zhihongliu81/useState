import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  return (
    <div className={`${theme} state`}>
      <h1>UseState Component</h1>
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "light" ? "dark" : "light";
          })
        }
      >
        Change Theme
      </button>
      <h1>
        {count}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </button>
      </h1>
    </div>
  );
};

export default UseState;
