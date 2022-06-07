import axios from "axios";
import React, { useState, useEffect } from "react";

export const FetchDataById = () => {
  const [postId, setPostId] = useState();
  const [idFromBtnClick, setIdFromBtnClick] = useState();
  const [response, setResponse] = useState([]);
  const [msg, setMsg] = useState("");

  const getPostById = async (e) => {
    setIdFromBtnClick(postId);
    e.preventDefault();
  };

  const getPost = async () => {
    console.log("get posts");
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((res) => {
        console.log(res);
        let firstTenResponse = res.data;

        setResponse(firstTenResponse);
      })
      .catch((error) => {
        setMsg("Something went wrong");
      });
  };

  useEffect(() => {
    getPost();
  }, [idFromBtnClick]);

  return (
    <div>
      {console.log("render")}
      <h4>Fetch Data By Id</h4>
      <input
        type="text"
        placeholder="Enter Post Id"
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={(e) => getPostById(e)}>Get Post{postId}</button>
      <div>{response.id}</div>
      <div>{response.body}</div>
    </div>
  );
};
