const auth_url = "https://accounts.spotify.com/authorize";
const clientId = "3fc13371e36b4dc0a569cd63066b7490";
const redirectUri = "https://nameless-thicket-51178.herokuapp.com/";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
];
export const accessUrl = `${auth_url}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;