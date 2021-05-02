import React, { useState, useEffect } from "react";
import TrendItem from "./TrendItem";

//done
function ListeningTrends({ artist, track }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (track && artist) {
      setLoading(false);
    }
  }, [track, artist]);

  if (loading) return null;

  return (
    <div className="grid place-items-center py-14 px-8  md:px-10  ">
      <h1 className="mb-10 text-2xl xs:text-4xl sm:text-5xl md:text-6xl text-center font-extrabold ">
        Your listening trends
      </h1>
      <div className=" grid w-full gap-10  place-items-center px-2 max-w-sm md:max-w-xl xl:grid-cols-2 xl:max-w-7xl xl:gap-14 xl:px-4">
        <TrendItem
          type="Top Artist"
          name={artist.name}
          img={artist.images[0].url}
          link={artist.external_urls.spotify}
        />
        <TrendItem
          type="Top Track"
          name={track.name}
          img={track.album.images[0].url}
          link={track.external_urls.spotify}
        />
      </div>
    </div>
  );
}

export default ListeningTrends;
