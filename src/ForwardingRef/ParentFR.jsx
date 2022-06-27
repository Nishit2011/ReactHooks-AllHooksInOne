import React, { useRef } from "react";
import ChildFR from "./ChildFR";

const ParentFR = () => {
  const inputRef = useRef();
  const clickFn = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <ChildFR ref={inputRef} />
      <button onClick={clickFn}>Click</button>
    </div>
  );
};

export default ParentFR;
