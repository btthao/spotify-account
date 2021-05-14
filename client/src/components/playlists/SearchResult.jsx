import React from "react";
import Image from "../Image";
import AddIcon from "@material-ui/icons/Add";

function Result({ name, img, artist, onClick }) {
  return (
    <div className=" flex w-full min-w-0  ">
      <div className="flex-1 flex items-center min-w-0 mr-4">
        <div className="w-10 mr-3 sm:w-12 ">
          <Image name={name} img={img} />
        </div>
        <div className="min-w-0 w-full  ">
          <h3 className="font-semibold max-w-full text-sm md:text-base truncate ">
            {name}
          </h3>
          <h4 className="text-xs truncate text-gray-400">{artist}</h4>
        </div>
      </div>

      <div className="self-center">
        <AddIcon
          className="add-icon cursor-pointer border rounded-full"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default Result;
