const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const app = express()
const cors = require('cors')
require("dotenv").config()
const path = require("path")

app.use(cors());
app.use(express.json())

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`starting server at ${port}`);
});

app.use(express.static(path.resolve(__dirname, 'client/build')));




const credentials = {
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
}

const spotifyApi = new SpotifyWebApi(credentials);

//login
app.post('/login', (req, res) => {
    const code = req.body.code
    spotifyApi.authorizationCodeGrant(code).then(
        (data) => {

            spotifyApi.setAccessToken(data.body.access_token);
            spotifyApi.setRefreshToken(data.body.refresh_token);
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        }
    ).catch((err) => {
        console.log(err);
        res.sendStatus(400)
    });
})

//refresh
app.post('/refresh', (req, res) => {
    spotifyApi
        .refreshAccessToken()
        .then(data => {
            spotifyApi.setAccessToken(data.body.access_token);
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })

})

//get recently played tracks
app.get('/recently-played', (req, res) => {
    spotifyApi
        .getMyRecentlyPlayedTracks({
            limit: 20
        })
        .then(data => {

            res.json({
                list: data.body.items,
            })
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/build/index.html'));
});