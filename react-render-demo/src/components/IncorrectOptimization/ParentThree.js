import React, { useState } from "react";
// import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFour } from "./ChildFour";

export const ParentThree = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Abu");

  console.log("ParentThree Render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count : {count}</button>
      <button onClick={() => setName("ReactDeveloper")}>Change Name</button>
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
      <MemoizedChildFour name={name}></MemoizedChildFour>
    </div>
  );
};
