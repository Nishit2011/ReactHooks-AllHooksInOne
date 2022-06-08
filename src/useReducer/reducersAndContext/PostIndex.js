import React, { useReducer } from "react";
import { Post } from "./Post";

const initialState = { val: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "num":
      return { ...state, val: action.payload };
    default:
      return state;
  }
};
export const PostContext = React.createContext();
export const PostIndex = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostContext.Provider value={state.val}>
      <div>
        <input
          type="text"
          placeholder="Enter post number"
          onChange={(e) => dispatch({ type: "num", payload: e.target.value })}
        />

        <Post />
      </div>
    </PostContext.Provider>
  );
};
