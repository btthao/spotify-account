import React from "react";

function Button({ link, text, blank }) {
  return (
    <a
      className="bg-spotify-green m-auto rounded-full px-4 py-3 font-bold tracking-wider filter hover:brightness-110 duration-150 min-w-max uppercase sm:px-8 sm:py-5 sm:text-xl"
      href={link}
      target={blank ? "_blank" : ""}
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

export default Button;
