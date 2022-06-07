import axios from "axios";
import React, { useReducer } from "react";

const initialState = { num: 0, post: null };

const reducer = (state, action) => {
  //console.log(action)
  switch (action.type) {
    case "num":
      return { ...state, num: action.payload };
    default:
      return state;
  }
};

const anotherReducer = (postState, action) => {
  switch (action.type) {
    case "post":
      return { ...postState, post: action.payload };
    case "postError":
      return { ...postState, post: action.payload };
    default:
      return postState;
  }
};

export const MultipleReducers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [postState, postDispatch] = useReducer(anotherReducer, initialState);

  const getPostById = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${state.num}`)
      .then((res) => {
        postDispatch({ type: "post", payload: res.data });
      })
      .catch((error) => {
        postDispatch({ type: "postError", payload: "Something Went Wrong" });
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a number"
        onChange={(e) => dispatch({ type: "num", payload: e.target.value })}
      />

      <button onClick={() => getPostById()}>Get Post{state.num}</button>
      <div>{postState.post?.title}</div>
    </div>
  );
};
