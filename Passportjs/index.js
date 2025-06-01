const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv/config')

const app = express();

app.use(session({
  secret: process.env.client_sec,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID: process.env.client_id,
    clientSecret: process.env.client_sec,
    callbackURL: process.env.callback_url
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('Access token', accessToken);
    console.log('Refresh token', refreshToken);
    console.log('Profile', profile);
    return done(null, profile);
  }
));

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Login with Google</a>')
});

app.get('/profile', (req, res) => {
  res.send((`Welcome ${req.user.displayName}`))
});

app.get('/auth/google', passport.authenticate('google', { 
  scope: ['profile', 'email'],
  prompt: 'consent',
  accessType: 'offline'
}));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/profile');
})

app.get('/logout', (req, res) => {
  console.log("You are logged out!");
  req.logOut(() => {
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  });
});

app.listen(3000, 'localhost', () => {
  console.log('Server is running at http://localhost:3000');
});