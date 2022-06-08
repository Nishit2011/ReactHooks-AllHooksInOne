import axios from "axios";
import React, { useContext, useReducer } from "react";
import { PostContext } from "./PostIndex";

const initialState = { data: null };
const reducer = (state, action) => {
  switch (action.type) {
    case "post":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const Post = () => {
  const postVal = useContext(PostContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPostById = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postVal}`)
      .then((res) => {
        () => dispatch({ type: "post", payload: res.data });
      });
  };
  return (
    <div>
      <button onClick={() => getPostById()}>Get Post {postVal}</button>
      {console.log(state.data)}
    </div>
  );
};
