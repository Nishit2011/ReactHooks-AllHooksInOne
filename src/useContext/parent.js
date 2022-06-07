import React, { useState } from "react";
import { Child } from "./child";

export const ValContext = React.createContext();

export const Parent = () => {
  const [val, setVal] = useState("");
  return (
    <div>
      <ValContext.Provider value={val}>
        <h5>Parent</h5>

        <input type="text" onChange={(e) => setVal(e.target.value)} />

        <Child />
      </ValContext.Provider>
    </div>
  );
};
