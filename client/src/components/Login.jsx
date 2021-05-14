import React from "react";
import Button from "./Button";
import { accessUrl } from "../spotify";
import Helmet from "./Helmet";

function Login() {
  return (
    <div className="w-screen h-screen grid place-items-center ">
      <Helmet title="Log in" />
      <Button text="LOGIN TO SPOTIFY" link={accessUrl} />
    </div>
  );
}

export default Login;
