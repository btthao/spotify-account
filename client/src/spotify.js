const auth_url = "https://accounts.spotify.com/authorize";
const clientId = "3fc13371e36b4dc0a569cd63066b7490";
const redirectUri = "https://personal-spotify.herokuapp.com/";
//const redirectUri = "http://localhost:3000/";
const scopes = [
    "user-read-recently-played",
    "user-top-read",
    "user-read-email",
    "user-read-private",
    "playlist-read-private",
    "playlist-modify-private",
    "playlist-modify-public",
];
export const accessUrl = `${auth_url}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;