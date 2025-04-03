import React, { useEffect, useState } from "react";

export default function Timer() {
  const [toggle, setToggle] = useState(false);
  console.log("timer component mountered");
  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        ClickMe
      </button>
      {console.log(toggle)}
      {toggle && <DemoComponent />}
    </div>
  );
}

function DemoComponent() {
  console.log("demoo component");
  useEffect(() => {
    console.log("use effect in demo");
    const taskone = setInterval(() => {
      console.log("testing");
    }, 1000);
    return () => {
      clearInterval(taskone);
      console.log("cleNUp");
    };
  }, []);

  return <h1>i'm from demo component</h1>;
}
