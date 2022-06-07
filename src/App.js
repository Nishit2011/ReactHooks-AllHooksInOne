import "./styles.css";
import React, { useState } from "react";
import { SimpleUseState } from "./SimpleUseState";
import { UseStateWithObject } from "./UseStateWithObject";
import { UseStateWithArray } from "./UseStateWithArray";
import { UseStateWithArrayOfObjects } from "./UseStateWithArrayOfObjects";

export default function App() {
  return (
    <div className="App ">
      {/* <SimpleUseState /> */}
      {/* <UseStateWithObject /> */}
      {/* <UseStateWithArray /> */}
      <UseStateWithArrayOfObjects />
    </div>
  );
}
