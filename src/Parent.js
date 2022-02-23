import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const updateFromChild = useCallback(() => setCount(count + 1), [count]);
  return (
    <div>
      <h1>Hello parent: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <br />
      <Child count={count} updateCount={updateFromChild} />
    </div>
  );
};

export default Parent;
