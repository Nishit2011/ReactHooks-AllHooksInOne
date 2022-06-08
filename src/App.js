import "./styles.css";
import React, { useState } from "react";
import { SimpleUseState } from "./SimpleUseState";
import { UseStateWithObject } from "./UseStateWithObject";
import { UseStateWithArray } from "./UseStateWithArray";
import { UseStateWithArrayOfObjects } from "./UseStateWithArrayOfObjects";
import { FetchingData } from "./FetchingData";
import { FetchDataById } from "./FetchingDataById";
import { Parent } from "./useContext/parent";
import { Simple } from "./useReducer/simple-example";
import { MultipleReducers } from "./useReducer/multipleReducers";
import { PostIndex } from "./useReducer/reducersAndContext/PostIndex";
import CallbackExample from "./UseCallback/CallbackExample";
import ParentMemo from "./useMemo/ParentMemo";

export default function App() {
  return (
    <div className="App ">
      {/* <SimpleUseState /> */}
      {/* <UseStateWithObject /> */}
      {/* <UseStateWithArray /> */}
      {/* <UseStateWithArrayOfObjects /> */}
      {/* <FetchingData /> */}
      {/* <FetchDataById /> */}
      {/* <Parent /> */}
      {/* <Simple /> */}
      {/* <MultipleReducers /> */}
      {/* <PostIndex /> */}
      {/* <CallbackExample /> */}
      <ParentMemo />
    </div>
  );
}
