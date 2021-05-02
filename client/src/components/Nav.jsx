import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { links } from "../data/nav";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";

//done
function Nav({ history, logout }) {
  const [pathname, setPathname] = useState("/");
  const [userData, setUserData] = useState({});
  useEffect(() => {
    history.listen((location) => {
      setPathname(location.pathname);
    });
  }, [history]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getme")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        window.location = "/";
        console.log(err);
      });
  }, []);

  return (
    <div className=" fixed flex bottom-0 left-0 w-full z-50 bg-black bg-opacity-90 lg:top-0 lg:bg-opacity-50 lg:w-52 lg:h-screen lg:flex-col">
      <div className="fixed right-1 top-3 flex border border-s-grey rounded-full bg-s-grey lg:relative lg:w-full lg:grid lg:place-items-center lg:px-1 lg:py-10 lg:gap-3 lg:border-0 lg:top-0 lg:right-0 lg:rounded-none lg:bg-transparent break-word text-center ">
        <Avatar
          alt={userData.displayName}
          src={`${userData.image?.length > 0 ? userData.image[0].url : ""}`}
          className="user-avatar"
        />
        <h1 className="hidden lg:block font-semibold text-lg  ">
          {userData.displayName}
        </h1>
        <button
          className=" cursor-pointer text-xs rounded-full px-3 lg:py-1  lg:border"
          onClick={logout}
        >
          Log Out
        </button>
      </div>
      <ul className=" flex w-full  border-gray-700 lg:border-b lg:flex-col">
        {links.map((item) => (
          <li
            key={item.id}
            className=" w-full lg:border-t border-gray-700 h-16 lg:h-12"
          >
            <Link to={item.url} className="group flex h-full ">
              <div
                className={`hidden lg:block lg:w-1.5 lg:h-full bg-spotify-green  group-hover:opacity-100 
                  ${pathname === item.url ? "opacity-100" : "opacity-0"}`}
              ></div>
              <div
                className={`flex-1 flex flex-col  items-center justify-center lg:justify-start lg:flex-row group-hover:text-white ${
                  pathname === item.url ? "text-white" : "text-s-grey-text"
                }`}
              >
                <div className="lg:mx-3">{item.icon}</div>
                <h6 className="text-xs sm:text-sm  font-semibold lg:text-base">
                  {item.name}
                </h6>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(Nav);
