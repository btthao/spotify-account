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


app.use(express.static(path.join(__dirname, "client/build")));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});



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
        res.sendStatus(200)
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

//delete track
app.post('/delete-track', (req, res) => {
    spotifyApi.removeTracksFromPlaylistByPosition(req.body.playlist, req.body.track, req.body.snapshotId)
        .then(data => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})

//add track
app.post('/add-track', (req, res) => {
    spotifyApi.addTracksToPlaylist(req.body.playlist, req.body.track)
        .then(data => {
            res.json({
                status: 'ok'
            });
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})