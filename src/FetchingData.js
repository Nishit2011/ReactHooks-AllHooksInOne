import axios from "axios";
import React, { useState, useEffect } from "react";

export const FetchingData = () => {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("No Data");
  const getPosts = async (e) => {
    e.preventDefault();
    console.log("get posts");
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        let firstTenResponse = res.data.slice(0, 10);

        setRes(firstTenResponse);
        setLoading(false);
      })
      .catch((error) => {
        setMsg("Something went wrong");
      });
  };

  const cleanPage = () => {
    setRes([]);
  };

  useEffect(() => {}, [loading]);
  return (
    <div>
      <h4>Fetching Data</h4>
      {!loading ? (
        <>
          <button onClick={(e) => getPosts(e)}>Get Posts</button>
          <button onClick={(e) => cleanPage(e)}>Clean</button>
          {res.map((el) => (
            <div key={el.id}>
              <span>{el.id}.</span>
              <span>{el.body.slice(0, 40)}</span>
            </div>
          ))}
        </>
      ) : (
        <>{msg}</>
      )}
    </div>
  );
};
