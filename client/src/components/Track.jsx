import React from "react";
import Image from "./Image";
import RemoveIcon from "@material-ui/icons/Remove";

const convertTime = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return seconds === 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

function Track({ name, img, artist, album, duration, edit, onClick }) {
  return (
    <div className=" flex md:grid md:grid-cols-track md:gap-4 w-full min-w-0  ">
      <div className="flex-1 flex items-center min-w-0">
        {edit && (
          <RemoveIcon
            className="delete-icon cursor-pointer border rounded-full mr-3 "
            onClick={onClick}
          />
        )}
        <div className="w-10 mr-3 sm:w-12 ">
          <Image name={name} img={img} />
        </div>
        <div className="min-w-0 w-full mr-3  ">
          <h3 className="font-semibold text-sm md:text-base truncate ">
            {name}
          </h3>
          <h4 className="text-xs truncate text-gray-400">{artist}</h4>
        </div>
      </div>
      <div className="min-w-0 hidden md:block self-center  ">
        <h3 className="truncate text-sm text-gray-400 ">{album}</h3>
      </div>
      <div className="text-right text-xs sm:text-sm self-center">
        {convertTime(duration)}
      </div>
    </div>
  );
}

export default Track;
