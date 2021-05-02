import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import axios from "axios";

function App() {
  const [code, setCode] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const currentCode = localStorage.getItem("spotify-access-detail")
      ? JSON.parse(localStorage.getItem("spotify-access-detail"))
      : {};

    if (Object.keys(currentCode).length === 0) {
      // login for the first time, no access token stored
      const getCode = new URLSearchParams(window.location.search).get("code");
      if (getCode) {
        setCode(getCode);
      } else {
        setLoading(false);
      }
    } else {
      //login again
      const timepassed = (Date.now() - currentCode.timestamp) / 1000;
      if (timepassed < 3500) {
        // if access code hasn't expired
        axios
          .post("http://localhost:4000/login", {
            access_token: currentCode.accessToken,
            refresh_token: currentCode.refreshToken,
          })
          .then((res) => {
            setAccessToken(currentCode.accessToken);
            setRefreshToken(currentCode.refreshToken);
            setExpiresIn(3600);
            window.history.pushState({}, null, "/");
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            window.location = "/";
          });
      } else if (timepassed < 1000000) {
        // if access code has expired, refresh to get new one
        axios
          .post("http://localhost:4000/refresh", {
            refresh_token: currentCode.refreshToken,
          })
          .then((res) => {
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
            localStorage.setItem(
              "spotify-access-detail",
              JSON.stringify({
                ...res.data,
                refreshToken: currentCode.refreshToken,
                timestamp: Date.now(),
              })
            );
            setLoading(false);
          })
          .catch(() => {
            window.location = "/";
          });
      } else {
        setAccessToken("");
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    // login for the first time
    if (code) {
      axios
        .post("http://localhost:4000/login", {
          code,
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem(
            "spotify-access-detail",
            JSON.stringify({ ...res.data, timestamp: Date.now() })
          );
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
          setExpiresIn(res.data.expiresIn);
          setLoading(false);
          window.history.pushState({}, null, "/");
        })
        .catch((err) => {
          console.log(err);
          window.location = "/";
        });
    }
  }, [code]);

  useEffect(() => {
    //refresh while using the app
    const interval = setInterval(() => {
      if (refreshToken) {
        axios
          .post("http://localhost:4000/refresh")
          .then((res) => {
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
            localStorage.setItem(
              "spotify-access-detail",
              JSON.stringify({
                ...res.data,
                refreshToken,
                timestamp: Date.now(),
              })
            );
          })
          .catch(() => {
            window.location = "/";
          });
      }
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  const logout = () => {
    setAccessToken("");
    setExpiresIn("");
    setRefreshToken("");
    localStorage.removeItem("spotify-access-detail");
  };

  if (loading) return null;
  return accessToken ? (
    <Dashboard accessToken={accessToken} logout={logout} />
  ) : (
    <Login />
  );
}

export default App;
