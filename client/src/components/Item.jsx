import React, { useState, useEffect, useRef } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

function Item({ img, name, link, trackName }) {
  // const containerRef = useRef(null);
  // const contentRef = useRef(null);
  // const [overflow, setOverflow] = useState(false);

  // const adjustText = () => {
  //   const contentHeight = contentRef.current.getBoundingClientRect().height;
  //   const containerHeight = containerRef.current.getBoundingClientRect().height;
  //   if (window.innerWidth >= 768) {
  //     if (contentHeight > 0.85 * containerHeight) {
  //       setOverflow(true);
  //     } else {
  //       setOverflow(false);
  //     }
  //   } else {
  //     setOverflow(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", adjustText);
  //   adjustText();
  //   return () => {
  //     window.removeEventListener("resize", adjustText);
  //   };
  // }, []);

  return (
    <div className="w-full h-full group relative">
      {/* img */}
      <div className="w-full grid-square relative overflow-hidden bg-gray-900 shadow-2xl ">
        <img
          src={img}
          alt={trackName || name}
          className="  w-full h-full absolute top-0 left-0 object-contain "
        />
      </div>
      {/* info */}
      <div className="w-full h-fullw-full flex flex-col items-center justify-center text-center md:absolute top-0 left-0  md:h-full md:opacity-0 md:bg-black md:bg-opacity-80 md:group-hover:opacity-100 md:transition md:duration-100 overflow-hidden ">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="hidden md:block"
        >
          <PlayCircleOutlineIcon className="play-icon" />
        </a>
        {trackName && (
          <p className="truncate  max-w-full px-2 mt-1 font-semibold text-xs xs:text-sm xl:text-base">
            {/* {trackName.length > 30
                ? trackName.substring(0, 30) + " ..."
                : trackName} */}
            {trackName}
          </p>
        )}
        <h3
          className={`  px-2 mt-0.5 font-medium text-xs xs:text-sm xl:text-base ${
            trackName ? "text-s-grey-text" : "text-white"
          } `}
        >
          {name.length > 30 ? name.substring(0, 30) + " ..." : name}
        </h3>
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
