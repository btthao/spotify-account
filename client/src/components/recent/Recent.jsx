import React, { useState, useEffect } from "react";
import Item from "../Item";
import axios from "axios";
import Button from "../Button";
import Helmet from "../Helmet";

function Recent({ headers }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/player/recently-played?limit=6", {
        headers,
      })
      .then((res) => {
        setList(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  }, [headers]);

  return (
    <div className="lg:pl-52 bg-s-purple1 bg-gradient-to-tr from-s-purple1 via-gray-900 to-s-blue1 pb-20 min-h-screen grid ">
      <Helmet title="Recent" />
      {loading && (
        <h1 className="text-center font-bold text-xl sm:text-3xl self-center ">
          Loading...
        </h1>
      )}
      {!loading &&
        (list.length === 0 ? (
          <h1 className="text-center font-bold text-xl sm:text-3xl self-center ">
            No data to show...
          </h1>
        ) : (
          <div className="text-center pt-12">
            <h1 className=" mb-10 text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-extrabold ">
              Jump Back In
            </h1>
            <Button
              blank
              text="OPEN WEB PLAYER"
              link="https://open.spotify.com/"
            />
            <div className=" mt-6 grid m-auto w-full gap-5 grid-cols-2 py-5 xs:p-5 md:py-12 md:px-8  md:grid-cols-3 md:w-11/12 lg:w-10/12 max-w-7xl">
              {list.map(({ track }) => (
                <Item
                  key={track.id}
                  trackName={track.name}
                  name={track.artists.map((i) => i.name).join(", ")}
                  link={track.external_urls.spotify}
                  img={track.album.images[0].url}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Recent;
