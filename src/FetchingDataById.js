import axios from "axios";
import React, { useState, useEffect } from "react";

export const FetchDataById = () => {
  const [postId, setPostId] = useState();
  const [response, setResponse] = useState([]);
  const [msg, setMsg] = useState("");

  const getPostById = async (e) => {
    e.preventDefault();
    console.log("get posts");
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        console.log(res);
        let firstTenResponse = res.data;

        setResponse(firstTenResponse);
      })
      .catch((error) => {
        setMsg("Something went wrong");
      });
  };

  useEffect(() => {}, [response]);

  return (
    <div>
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
