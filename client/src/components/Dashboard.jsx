import React, { useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [list, setList] = useState([]);

  const getTracks = () => {
    axios
      .get("/recently-played")
      .then((res) => {
        console.log(res);
        setList(res.data.list);
      })
      .catch((err) => {
        // window.location = "/";
        console.log(err);
      });
  };
  return (
    <>
      <div onClick={() => getTracks()}>{accessToken}</div>
      <div>
        {list.map((list, index) => (
          <h1 key={index}>{list.track.name}</h1>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
