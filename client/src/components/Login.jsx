import React from "react";
import { accessUrl } from "../spotify";

function Login() {
  return (
    <div className="w-screen h-screen grid place-items-center ">
      <a
        className="bg-spotify-green rounded-full px-8 py-5 font-bold text-xl tracking-widest filter hover:brightness-110 duration-150 min-w-max"
        href={accessUrl}
      >
        LOGIN TO SPOTIFY
      </a>
    </div>
  );
}

export default Login;
