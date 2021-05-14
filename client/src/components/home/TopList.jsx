import React from "react";
import Item from "../Item";

function TopList({ name, items }) {
  return (
    <div className="grid w-full place-items-center mt-6 py-6  lg:px-8  ">
      <h1 className="mb-6 px-2 text-xl xs:text-3xl lg:text-4xl text-center font-bold">
        {name}
      </h1>
      <div className="grid w-full gap-5 grid-cols-2 xs:p-5  md:grid-cols-4 max-w-7xl ">
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
