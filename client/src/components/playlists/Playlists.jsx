import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./PlaylistsItem";
import SpotifyIcon from "../../data/icon.png";
import Helmet from "../Helmet";

function Playlists({ headers }) {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/playlists", { headers })
      .then((res) => {
        setPlaylists(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [headers]);
  return (
    <div className="lg:pl-52  bg-s-blue2 bg-gradient-to-r from-s-purple2 to-s-blue2 pb-20 min-h-screen  grid ">
      <Helmet title="Playlists" />
      {loading && (
        <h1 className="text-center font-bold text-xl sm:text-3xl self-center ">
          Loading...
        </h1>
      )}
      {!loading &&
        (playlists.length === 0 ? (
          <h1 className="text-center font-bold text-xl sm:text-3xl self-center ">
            You have no playlists.
          </h1>
        ) : (
          <div className="text-center pt-14">
            <h1 className=" mb-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-extrabold ">
              Your Playlists
            </h1>
            <div className="grid gap-4 m-auto  grid-cols-2 py-5 xs:px-5 sm:grid-cols-3 sm:gap-7 lg:grid-cols-4 max-w-7xl">
              {playlists.map((playlist) => (
                <Item
                  key={playlist.id}
                  img={
                    playlist.images.length > 0
                      ? playlist.images[0].url
                      : SpotifyIcon
                  }
                  name={playlist.name}
                  tracks={playlist.tracks.total}
                  id={playlist.id}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Playlists;
