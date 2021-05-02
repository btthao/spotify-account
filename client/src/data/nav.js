import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import ReplayIcon from '@material-ui/icons/Replay';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
export const links = [{
        id: 1,
        url: "/",
        name: "Home",
        icon: < HomeIcon / >
    },
    {
        id: 2,
        url: "/playlists",
        name: "Playlists",
        icon: < LibraryMusicIcon / >
    },
    {
        id: 3,
        url: "/recent",
        name: "Recent",
        icon: < ReplayIcon / >
    },
    {
        id: 4,
        url: "/discover",
        name: "Discover",
        icon: < SearchIcon / >
    },
];