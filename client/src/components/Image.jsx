import React from "react";

function Image({ img, name }) {
  return (
    <div className="w-full pb-item-100 relative overflow-hidden bg-gray-900 shadow-2xl ">
      <img
        src={img}
        alt={name}
        className="  w-full h-full absolute top-0 left-0 object-contain "
      />
    </div>
  );
}

export default Image;
