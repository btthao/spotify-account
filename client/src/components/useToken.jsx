import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "./context";

function useToken() {
  const [{ userId }, dispatch] = useUserContext();
  const [code, setCode] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setAccessToken("");
      setRefreshToken("");
      setExpiresIn("");
    }
  }, [userId]);

  useEffect(() => {
    // get access code from local storage
    const currentCode = localStorage.getItem("spotify-access-detail")
      ? JSON.parse(localStorage.getItem("spotify-access-detail"))
      : {};

    if (Object.keys(currentCode).length === 0) {
      // login for the first time, no access token in local storage
      const getCode = new URLSearchParams(window.location.search).get("code");
      if (getCode) {
        setCode(getCode);
      } else {
        setLoading(false);
      }
    } else {
      //user has logged in before

      const timepassed = (Date.now() - currentCode.timestamp) / 1000;

      if (timepassed < 1000) {
        // if access code hasn't expired (less than an hour)
        axios
          .post("/login", {
            access_token: currentCode.accessToken,
            refresh_token: currentCode.refreshToken,
          })
          .then(() => {
            setAccessToken(currentCode.accessToken);
            setRefreshToken(currentCode.refreshToken);
            setExpiresIn(3600);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            window.location.reload();
          });
      } else if (timepassed < 400000) {
        // if access code has expired but can still use refresh token so no need to log in again (roughly 5 days)
        axios
          .post("/refresh", {
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
          .catch((err) => {
            console.log(err);
            window.location.reload();
          });
      } else {
        // cant use token stored in local storage, back to login page
        setAccessToken("");
        setLoading(false);
      }
    }

    return () => {
      setAccessToken("");
      setRefreshToken("");
      setExpiresIn("");
      setLoading(true);
      setCode("");
    };
  }, []);

  useEffect(() => {
    // login for the first time
    if (code) {
      axios
        .post("/login", {
          code,
        })
        .then((res) => {
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
          window.location.reload();
        });
    }
  }, [code]);

  useEffect(() => {
    //refresh while using the app (before 1 hour)
    const interval = setInterval(() => {
      if (refreshToken && expiresIn) {
        axios
          .post("/refresh")
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
          .catch((err) => {
            console.log(err);
            window.location.reload();
          });
      }
    }, (expiresIn - 600) * 1000);

    if (!refreshToken) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return { accessToken, loading };
}

export default useToken;
