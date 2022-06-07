import React, { useState } from "react";
export const SimpleUseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count</h3>
      <div className="form">
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <div>{count}</div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 5)}>
          +5
        </button>
      </div>
    </div>
  );
};
