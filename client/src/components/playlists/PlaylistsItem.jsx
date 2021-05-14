import React from "react";
import Image from "../Image";
import { Link } from "react-router-dom";

function Item({ img, name, tracks, id }) {
  return (
    <Link to={`/playlists/${id}`} className="w-full group relative">
      {/* img */}
      <Image img={img} name={name} />
      {/* info */}
      <div className="w-full mt-2 flex flex-col items-center justify-center text-center  overflow-hidden ">
        <h6 className=" px-2 mt-0.5 font-medium text-xs xs:text-sm xl:text-base group-hover:underline ">
          {name.length > 70 ? name.substring(0, 70) + " ..." : name}
        </h6>
        <p className="text-sm text-spotify-green">
          {tracks > 1 ? `${tracks} tracks` : `${tracks} track`}
        </p>
      </div>
    </Link>
  );
}

export default Item;
