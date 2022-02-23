import React, { memo } from "react";

const Child = (props) => {
  console.log("this is rerendered");
  let { count, updateCount } = props;
  return (
    <div style={{ border: "3px solid", padding: 20, margin: 30 }}>
      <h1>Child {count}</h1>
      <button onClick={updateCount}>Inc</button>
    </div>
  );
};

export default memo(Child);
