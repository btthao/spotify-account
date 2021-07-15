import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import useToken from "./components/useToken";
import { useUserContext } from "./components/context";

function App() {
    const [, dispatch] = useUserContext();
    const [token, setToken] = useState("");
    const [headers, setHeaders] = useState({});
    const { accessToken, loading } = useToken();

    useEffect(() => {
        if (accessToken) {
            setToken(accessToken);
            setHeaders({
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            });
        }
    }, [accessToken]);

    const logout = () => {
        setToken("");
        localStorage.removeItem("spotify-access-detail");
        window.history.pushState({}, null, "/");
        dispatch({ type: "SET_USER", payload: null });
    };

    if (loading) return null;

    return token ? < Dashboard headers = { headers }
    logout = { logout }
    /> : <Login / > ;
}

export default App;