import React, { useState, useMemo } from "react";
import Count from "./Count";

//useMemo caches the result of the function
//useCallback caches the function itself

function ParentMemo() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const countOne = () => {
    setOne(one + 1);
  };
  const countTwo = () => {
    setTwo(two + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000) i++;

    return one % 2 === 0;
  }, [one]);
  return (
    <div>
      <h3> Parent Memo </h3>
      <Count handler={countOne}>Counter One {one}</Count>
      <span>{isEven ? "Even" : "Odd"}</span>
      <Count handler={countTwo}>Counter Two {two}</Count>
    </div>
  );
}

export default ParentMemo;
