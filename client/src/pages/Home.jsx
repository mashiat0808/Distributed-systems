/* eslint-disable react/jsx-key */
import React from "react";
import axios from "axios";
import "./home.css";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    const config={
      headers: {
        Authorization: 'Bearer ' +localStorage.getItem('token'),
      },
    }
    axios.get("http://localhost:3001/posts", config)
      .then((response) => {
        console.log(response.data);
        setListOfPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  return (
    <div>
      <Navbar/>
            {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div className="title"> {value.title} </div>
            <div className="body">{value.postText}</div>
            <div className="footer">@{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;