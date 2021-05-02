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

// app.use(express.static(path.resolve(__dirname, 'client/build')));




const credentials = {
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
}

const spotifyApi = new SpotifyWebApi(credentials);

//login
app.post('/login', (req, res) => {
    const code = req.body.code
    if (code) {
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
    } else {
        spotifyApi.setAccessToken(req.body.access_token);
        spotifyApi.setRefreshToken(req.body.refresh_token);
        res.json({
            status: 'ok'
        })
    }
})




//refresh
app.post('/refresh', (req, res) => {
    if (req.body.refresh_token) {
        spotifyApi.setRefreshToken(req.body.refresh_token);
    }
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
            limit: 6
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

//get user's information//done

app.get('/getme', (req, res) => {
    spotifyApi.getMe()
        .then((data) => {
            console.log(data.body)
            res.json({
                displayName: data.body.display_name,
                image: data.body.images,
            })
        })
        .catch(err => { console.log(err) })
})

//get user's top artists

app.get('/top-artists', (req, res) => {
    spotifyApi.getMyTopArtists({
            limit: 8
        })
        .then((data) => {
            res.json({
                list: data.body.items
            })
        })
        .catch(err => { console.log(err) })
})

//get top tracks
app.get('/top-tracks', (req, res) => {
    spotifyApi.getMyTopTracks({
            limit: 8
        })
        .then((data) => {
            res.json({
                list: data.body.items
            })
        })
        .catch(err => { console.log(err) })
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + 'client/build/index.html'));
// });