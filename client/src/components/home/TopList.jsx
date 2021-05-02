import React, { useState, useEffect } from "react";
import Item from "../Item";

//done
function TopList({ name, items }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items]);

  if (loading) return null;
  return (
    <div className="grid w-full place-items-center p-5 md:py-12 md:px-8 ">
      <h1 className="mb-10 text-xl xs:text-3xl lg:text-4xl text-center font-bold">
        {name}
      </h1>
      <div className="grid w-full gap-5 grid-cols-2 md:grid-cols-4 ">
        {items.map((item) => (
          <Item
            key={item.id}
            trackName={name === "Top Artists" ? "" : item.name}
            name={
              name === "Top Artists"
                ? item.name
                : item.artists.map((i) => i.name).join(", ")
            }
            img={
              name === "Top Artists"
                ? item.images[0].url
                : item.album.images[0].url
            }
            link={item.external_urls.spotify}
          />
        ))}
      </div>
    </div>
  );
}

export default TopList;
