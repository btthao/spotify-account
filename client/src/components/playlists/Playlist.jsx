import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Track from "../Track";
import Image from "../Image";
import SpotifyIcon from "../../data/icon.png";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { useUserContext } from "../context";
import ListIcon from "@material-ui/icons/List";
import AddSongs from "./AddSongs";
import Helmet from "../Helmet";

function Playlist({ headers }) {
  const [{ userId }, dispatch] = useUserContext();
  const [tracks, setTracks] = useState([]);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [link, setLink] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(true);
  const [ownerId, setOwnerId] = useState("");
  const [edit, setEdit] = useState(false);
  const [snapshotId, setSnapshotId] = useState("");
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const getPlaylist = useCallback(() => {
    axios
      .get(`https://api.spotify.com/v1/playlists/${id}`, {
        headers,
      })
      .then((res) => {
        const { external_urls, images, name, owner, tracks, snapshot_id } =
          res.data;
        setName(name);
        setOwner(owner.display_name);
        setOwnerId(owner.id);
        setLink(external_urls.spotify);
        setTracks(tracks.items);
        setSnapshotId(snapshot_id);
        setImg(images.length > 0 ? images[0].url : SpotifyIcon);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [headers, id]);

  useEffect(() => {
    getPlaylist();
  }, [getPlaylist]);

  const deleteTrack = (index) => {
    axios
      .post("/delete-track", {
        playlist: id,
        track: [index],
        snapshotId,
      })
      .then((res) => {
        getPlaylist();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const doneAdding = () => {
    setEdit(false);
    getPlaylist();
    setModal(false);
  };

  return (
    <div className="lg:pl-52  bg-gray-900  pb-20 min-h-screen grid  ">
      <Helmet title={name} />

      {modal && (
        <AddSongs
          playlist={id}
          name={name}
          headers={headers}
          onClick={() => doneAdding()}
        />
      )}
      {loading && (
        <h1 className="text-center font-bold text-xl sm:text-3xl self-center ">
          Loading...
        </h1>
      )}

      {!loading && (
        <div>
          {/* header */}
          <div className="w-full flex flex-col items-center pt-12 pb-8 xl:pb-20 px-6 xl:px-10 text-center bg-gradient-to-b from-yellow-400 via-purple-600  to-transparent xl:flex-row relative">
            <h1 className=" z-20 mb-2 px-2 font-semibold text-lg xs:text-2xl md:text-4xl xl:hidden xs:px-6 ">
              {name.length > 120 ? name.substring(0, 120) + " ..." : name}
            </h1>

            <div className="w-1/3 lg:w-full max-w-xs mb-2 z-20  ">
              <Image name={name} img={img} />
            </div>
            <div className="  xl:ml-5 xl:text-left z-20 pb-4">
              <h1
                className={`hidden mb-2 font-extrabold xl:block ${
                  name.length > 60 ? "text-4xl" : "text-6xl"
                }`}
              >
                {name.length > 120 ? name.substring(0, 120) + " ..." : name}
              </h1>
              <h3 className="text-sm mb-2 xl:text-base">By {owner}</h3>
              <h4 className="mb-3 text-sm text-spotify-green font-semibold">
                {tracks.length > 1
                  ? `${tracks.length} tracks`
                  : `${tracks.length} track`}
                {userId === ownerId && (
                  <span
                    className="cursor-pointer"
                    onClick={() => setModal(true)}
                  >
                    {" "}
                    &bull; Add songs
                  </span>
                )}
              </h4>
              <a
                className="border mb-8 text-xs py-1.5 px-4 rounded-full border-spotify-green hover:bg-spotify-green font-semibold"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Listen on Spotify
              </a>
            </div>
            <div className="absolute bottom-0 h-full w-full left-0 z-0  bg-gray-900 bg-opacity-30">
              <div className="absolute bottom-0 h-1/4 w-full left-0 z-0  bg-gray-900 bg-opacity-20" />
            </div>
          </div>
          {/* body */}
          <div className="w-full  mt-10 px-3 xs:px-5 grid gap-5 xl:px-10 ">
            {userId === ownerId && tracks.length > 0 && (
              <div className=" w-full text-sm flex items-center justify-between ">
                <button
                  className=" focus:outline-none flex items-center cursor-pointer"
                  onClick={() => setEdit(true)}
                >
                  <ListIcon className="mr-1" /> Edit playlist
                </button>
                {edit && (
                  <button
                    className="focus:outline-none cursor-pointer"
                    onClick={() => setEdit(false)}
                  >
                    Done
                  </button>
                )}
              </div>
            )}
            {tracks.length > 0 && (
              <div className="hidden md:grid font-extralight text-gray-500 grid-cols-track gap-4 text-sm border-b pb-2 mb-3 border-gray-700 uppercase ">
                <h1>Title</h1>
                <h1>Album</h1>
                <AccessTimeIcon className="justify-self-end time-icon " />
              </div>
            )}
            {tracks.map(({ track }, index) => (
              <Track
                key={index}
                name={track.name}
                img={
                  track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image;
                    return smallest;
                  }, track.album.images[0]).url
                }
                artist={track.artists.map((i) => i.name).join(", ")}
                duration={track.duration_ms}
                album={track.album.name}
                edit={edit}
                onClick={() => deleteTrack(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Playlist;
