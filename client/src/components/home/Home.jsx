import React, { useState, useEffect } from "react";
import axios from "axios";
import ListeningTrends from "./ListeningTrends";
import TopList from "./TopList";

function Home() {
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/top-artists")
      .then((res) => {
        setTopArtists(res.data.list);
        // console.log(res.data.list);
      })
      .catch((err) => {
        window.location = "/";
        console.log(err);
      });
    axios
      .get("http://localhost:4000/top-tracks")
      .then((res) => {
        setTopTracks(res.data.list);
        // console.log(res.data.list);
      })
      .catch((err) => {
        window.location = "/";
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (topTracks.length > 0 && topArtists.length > 0) {
      setLoading(false);
    }
  }, [topTracks, topArtists]);

  if (loading) return null;

  return (
    <div className=" lg:pl-52  bg-s-blue3 bg-gradient-to-r from-s-blue3 to-s-purple2 pb-20 min-h-screen">
      {topArtists.length === 0 && topTracks.length === 0 ? (
        <h1>Nothing to show</h1>
      ) : (
        <>
          <ListeningTrends artist={topArtists[5]} track={topTracks[0]} />
          <TopList name="Top Artists" items={topArtists} />
          <TopList name="Top Tracks" items={topTracks} />
        </>
      )}
    </div>
  );
}

export default Home;
