const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv/config');


const app = express();

app.use(passport.initialize());


passport.use(new GoogleStrategy(
    {
        clientID: process.env.client_id,
        clientSecret: process.env.client_sec,
        callbackURL: process.env.callback_url
    },
    (accessToken, refreshToken, profile, done) => {
        console.table([`Access Token is ${accessToken}`, `Refresh Token is ${refreshToken}`, `Profile is ${profile}`]);
        return done(null, profile);
    }
));

app.get('/', (req, res) => {
    res.send('<a href="/auth/google" >Login with Google</a>');
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false, prompt: 'consent', accessType: 'offline' }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/', session: false }), (req, res) => {
    res.send(`Welcome ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
    req.logOut(() => {
        res.redirect('/');
    });
});

app.listen(3000, 'localhost', () => {
    console.log('Server is running at htt://localhost:3000');
});