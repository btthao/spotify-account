import React, { useState, useEffect } from "react";
import Item from "../Item";
import axios from "axios";
import Button from "../Button";

function Recent() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/recently-played")
      .then((res) => {
        setList(res.data.list);
        console.log(res.data.list);
        setLoading(false);
      })
      .catch((err) => {
        window.location = "/";
        console.log(err);
      });
  }, []);
  if (loading) return null;
  return (
    <div className="lg:pl-52 bg-s-purple1 bg-gradient-to-tr from-s-purple1 via-gray-900 to-s-blue1 pb-20 min-h-screen  flex flex-col items-center  ">
      <h1 className="mt-16 mb-6 text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-extrabold ">
        Jump Back In
      </h1>
      <Button blank text="OPEN WEB PLAYER" link="https://open.spotify.com/" />
      <div className=" mt-3 grid w-full gap-5 grid-cols-2 p-5 md:py-12 md:px-8 md:grid-cols-3 md:w-11/12 lg:w-10/12">
        {list.map((item) => (
          <Item
            trackName={item.track.name}
            name={item.track.artists.map((i) => i.name).join(", ")}
            link={item.track.external_urls.spotify}
            img={item.track.album.images[0].url}
          />
        ))}
      </div>
    </div>
  );
}

export default Recent;
