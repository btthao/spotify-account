import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import Result from "./SearchResult";
import BeatLoader from "react-spinners/BeatLoader";

function AddSongs({ onClick, headers, playlist, name }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [alert, setAlert] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const newQuery = encodeURIComponent(search.trim());
    if (newQuery !== query) {
      setQuery(newQuery);
    }
  }, [search, query]);

  useEffect(() => {
    let fetch = true;
    if (!query) {
      setResults([]);
    }
    if (headers && query) {
      axios
        .get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
          headers,
        })
        .then((res) => {
          if (!fetch) return;
          setResults(res.data.tracks.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      fetch = false;
    };
  }, [headers, query]);

  const addToPlaylist = (uri) => {
    axios
      .post("/add-track", {
        playlist,
        track: [uri],
      })
      .then(() => {
        setAlert(true);
        setTimeout(() => setAlert(false), 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="fixed z-100 top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-90">
      <div
        className={`absolute w-1/2 xs:w-1/3 sm:w-1/6 max-w-xs text-center bg-gray-800 bg-opacity-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-4 rounded-md text-sm z-40 ${
          alert ? "block" : "hidden"
        } `}
      >
        Added to {name.length > 60 ? name.substring(0, 60) + " ..." : name}
      </div>
      <div className="absolute pb-6 px-4 top-1/2 left-1/2 w-full sm:w-5/6 max-w-lg h-full sm:h-5/6 max-h-120 transform bg-black -translate-x-1/2 -translate-y-1/2 overflow-scroll  ">
        <div className=" bg-black w-full pt-6 pb-2 z-30 sticky -top-1 flex flex-col ">
          <CloseIcon
            className="cursor-pointer mb-2 self-end "
            onClick={onClick}
          />
          <input
            placeholder="Search tracks"
            className="bg-gray-700 rounded-sm w-full p-2 text-sm "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid pb-4 mt-4 gap-4">
          {results.length > 0 ? (
            results.map((track, index) => (
              <Result
                key={index}
                name={track.name}
                img={
                  track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image;
                    return smallest;
                  }, track.album.images[0]).url
                }
                artist={track.artists.map((i) => i.name).join(", ")}
                onClick={() => {
                  addToPlaylist(track.uri);
                }}
              />
            ))
          ) : (
            <div className="grid w-full mt-8 place-items-center">
              <BeatLoader color="white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddSongs;
