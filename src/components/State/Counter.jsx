import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const handleDecrement = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
