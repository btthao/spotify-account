import React from "react";
import Button from "./Button";
import { accessUrl } from "../spotify";

//done
function Login() {
  return (
    <div className="w-screen h-screen grid place-items-center ">
      <Button text="LOGIN TO SPOTIFY" link={accessUrl} />
    </div>
  );
}

export default Login;
