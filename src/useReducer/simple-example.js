import React, { useReducer } from "react";
import axios from "axios";

const initialState = { val: null, error: null, header: "", loading: true };
const reducer = (state, action) => {
  switch (action.type) {
    case "SuccessPosts":
      return {
        ...state,
        val: action.payload,
        header: "Posts",
        loading: false
      };
    case "ErrorPosts":
      return { error: "Posts not loaded!" };
    case "SuccessPhotos":
      return {
        ...state,
        val: action.payload,
        header: "Photos",
        loading: false
      };
    case "ErrorPhotos":
      return { error: "Photos not loaded!" };
    default:
      return state;
  }
};

export const Simple = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = async (e) => {
    console.log("getPosts---");
    e.preventDefault();
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) =>
        dispatch({ type: "SuccessPosts", payload: res.data.slice(0, 5) })
      )
      .catch((error) =>
        dispatch({ type: "ErrorPosts", payload: "Something Went Wrong!" })
      );
  };
  const getPhotos = async (e) => {
    console.log("getPhotos--");
    e.preventDefault();
    await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) =>
        dispatch({ type: "SuccessPhotos", payload: res.data.slice(0, 5) })
      )
      .catch((error) =>
        dispatch({ type: "ErrorPhotos", payload: "Something Went Wrong!" })
      );
  };
  const renderData = () => {
    console.log(state);
    if (state.header === "Posts") {
      state.val.map((el) => <div key={el.id}>{el.title}</div>);
    } else if (state.header === "Photos") {
      state.val.map((el) => <div key={el.id}>{el.url}</div>);
    }
  };
  return (
    <div>
      <button onClick={(e) => getPosts(e)}>Get Posts</button>
      <button onClick={(e) => getPhotos(e)}>Get Photos</button>
      {state.loading === false ? <div> {renderData()}</div> : <></>}
    </div>
  );
};
