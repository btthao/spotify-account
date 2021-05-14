import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Image from "./Image";

function Item({ img, name, link, trackName }) {
  return (
    <div className="w-full group relative">
      {/* img */}
      <Image img={img} name={trackName || name} />
      {/* info */}
      <div className="w-full flex flex-col items-center justify-center text-center md:absolute top-0 left-0  md:h-full md:opacity-0 md:bg-black md:bg-opacity-80 md:group-hover:opacity-100 md:transition md:duration-100 overflow-hidden ">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="hidden md:block"
        >
          <PlayCircleOutlineIcon className="play-icon" />
        </a>
        {/* trackname */}
        {trackName && (
          <p className="truncate max-w-full px-2 mt-1 font-semibold text-xs xs:text-sm xl:text-base">
            {trackName}
          </p>
        )}
        {/* artist name */}
        <p
          className={`px-2 mt-0.5 font-medium text-xs xs:text-sm xl:text-base  ${
            trackName ? "text-gray-400" : "text-white"
          } `}
        >
          {name.length > 40 ? name.substring(0, 40) + " ..." : name}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="md:hidden mt-0.5 tracking-wider text-spotify-green font-semibold text-xs sm:text-sm "
        >
          Play now
        </a>
      </div>
    </div>
  );
}

export default Item;
