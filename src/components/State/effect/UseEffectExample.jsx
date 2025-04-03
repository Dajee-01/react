import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("Component muted use effect1");
  }, [count1]);

  const handleCount1 = () => {
    setCount1((prevState) => {
      return prevState + 1;
    });
  };
  const handleCount2 = () => {
    setCount2((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <h1>Counter1:{count1}</h1>
      <button onClick={handleCount1}>Counter1</button>

      <br />
      <br />
      <h1>Counter2:{count2}</h1>
      <button onClick={handleCount2}>Counter2</button>
    </div>
  );
}
