import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { links } from "../data/nav";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import { useUserContext } from "./context";

const trimPath = (path) => {
  return path.lastIndexOf("/") === 0
    ? path
    : path.substring(0, path.lastIndexOf("/"));
};

function Nav({ history, logout, headers }) {
  const [state, dispatch] = useUserContext();
  const [pathname, setPathname] = useState(trimPath(window.location.pathname));
  const [userData, setUserData] = useState({});
  useEffect(() => {
    history.listen((location) => {
      setPathname(trimPath(location.pathname));
    });
  }, [history]);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me", { headers })
      .then((res) => {
        setUserData(res.data);
        dispatch({ type: "SET_USER", payload: res.data.id });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers]);

  return (
    <div className=" fixed flex bottom-0 left-0 w-full z-70 bg-black bg-opacity-90 lg:top-0 lg:bg-opacity-50 lg:w-52 lg:h-screen lg:flex-col overflow-hidden">
      <div className="hidden lg:relative lg:w-full lg:grid lg:place-items-center lg:px-1 lg:py-10 lg:gap-3 lg:border-0 lg:top-0 lg:right-0 lg:rounded-none lg:bg-transparent  text-center ">
        <Avatar
          alt={userData.display_name}
          src={`${userData.images?.length > 0 ? userData.images[0].url : ""}`}
          className="user-avatar"
        />
        <h1 className="hidden overflow-hidden lg:block font-semibold text-lg  ">
          {userData.display_name}
        </h1>
        <button
          className=" cursor-pointer text-xs rounded-full px-3 lg:py-1 lg:border border-spotify-green lg:hover:bg-spotify-green "
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
                className={`flex-1 flex flex-col  items-center justify-center lg:justify-start lg:flex-row group-hover:text-white group-hover:font-bold ${
                  pathname === item.url
                    ? "text-white font-bold"
                    : "text-gray-500 font-semibold"
                }`}
              >
                <div className="lg:mx-3">{item.icon}</div>
                <h6 className="text-xs sm:text-sm   lg:text-base">
                  {item.name}
                </h6>
              </div>
            </Link>
          </li>
        ))}
        <li
          className=" w-full group flex border-gray-700 h-16 lg:hidden cursor-pointer"
          onClick={logout}
        >
          <div
            className={`hidden lg:block lg:w-1.5 lg:h-full bg-spotify-green  group-hover:opacity-100 
                  `}
          ></div>
          <div
            className={`flex-1 flex flex-col  items-center justify-center lg:justify-start lg:flex-row group-hover:text-white group-hover:font-bold text-gray-500 font-semibold `}
          >
            <div className="lg:mx-3">
              <Avatar
                alt={userData.display_name}
                src={`${
                  userData.images?.length > 0 ? userData.images[0].url : ""
                }`}
                className="user-avatar"
              />
            </div>
            <h6 className="text-xs sm:text-sm   lg:text-base">Log out</h6>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Nav);
