import React from "react";

function TrendItem({ type, name, img, link }) {
  return (
    <div
      className=" mt-24 relative w-full
        pb-trending-90 bg-white bg-opacity-5 z-0 md:pb-trending-40
        md:w-11/12 md:justify-self-start md:mt-16"
    >
      <small className="absolute min-w-max -top-24 left-1/2 transform -translate-x-1/2  text-xs bg-opacity-40 bg-s-blue2 py-1 px-8 text-center  md:top-2 md:-left-2 md:translate-x-0 md:px-4">
        {type}
      </small>
      <div className=" z-20 w-over absolute left-1/2 bottom-3  transform -translate-x-1/2 text-center md:top-12 md:w-4/6 md:-left-4 md:translate-x-0 md:text-left">
        <h3 className="truncate max-w-full bg-s-blue2 px-1 py-2 font-semibold xs:font-bold xs:text-xl md:pl-8">
          {name}
        </h3>
        <button className="mt-3 tracking-wider text-spotify-green font-bold text-sm md:pl-8">
          <a href={link} target="_blank" rel="noreferrer">
            Play now
          </a>
        </button>
      </div>
      <div className=" absolute z-10 top-0 left-1/2 w-85 h-0 pb-trending-85  transform -translate-x-1/2 -translate-y-12 bg-gray-900 md:w-1/2 md:translate-x-6 md:pb-trending-50 ">
        <img
          src={img}
          alt={name}
          className="w-full h-full absolute top-0 left-0 object-contain "
        />
      </div>
    </div>
  );
}

export default TrendItem;
