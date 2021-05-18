import React, { useState, useEffect } from "react";
import axios from "axios";
import ListeningTrends from "./ListeningTrends";
import TopList from "./TopList";
import Helmet from "../Helmet";

function Home({ headers }) {
  const [topArtists, setTopArtists] = useState([]);
  const [artistsLoad, setArtistsLoad] = useState(true);
  const [topTracks, setTopTracks] = useState([]);
  const [tracksLoad, setTracksLoad] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://api.spotify.com/v1/me/top/artists?limit=8&time_range=long_term",
        {
          headers,
        }
      )
      .then((res) => {
        setTopArtists(res.data.items);
        setArtistsLoad(false);
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });

    axios
      .get(
        "https://api.spotify.com/v1/me/top/tracks?limit=8&time_range=long_term",
        { headers }
      )
      .then((res) => {
        setTopTracks(res.data.items);
        setTracksLoad(false);
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  }, [headers]);

  useEffect(() => {
    if (!tracksLoad && !artistsLoad) {
      setLoading(false);
    }
  }, [tracksLoad, artistsLoad]);

  return (
    <div className=" lg:pl-52  bg-s-blue3 bg-gradient-to-r from-s-blue3 to-s-purple2 pb-20 min-h-screen grid  ">
      <Helmet title="Home" />
      {loading && (
        <h1 className="text-center font-bold text-xl sm:text-3xl self-center ">
          Loading...
        </h1>
      )}
      {!loading &&
        (topArtists.length === 0 && topTracks.length === 0 ? (
          <h1 className="text-center font-bold text-xl sm:text-3xl self-center ">
            No data to show...
          </h1>
        ) : (
          <div>
            <ListeningTrends artist={topArtists[0]} track={topTracks[0]} />
            <TopList name="Top Artists" items={topArtists} />
            <TopList name="Top Tracks" items={topTracks} />
          </div>
        ))}
    </div>
  );
}

export default Home;
