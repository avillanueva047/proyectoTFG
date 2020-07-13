
//Using "passportjs" framework so we can use Google Login functionality
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

const dotenv = require('dotenv');
dotenv.config();

//We take a piece of information of the user
//and create a cookie associated to the user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  User.findById(id).then(
    (user) => {
      done(null, user);
    }
  );
});

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
  },
  function(accessToken, refreshToken, profile, callback) {
    // Use the profile info to check if the user is registered in our DB
    User.findOne({ googleId: profile.id }).then(
      (currentUser) => {
        if(currentUser) {
          console.log('User is ', currentUser);
          callback(null, currentUser);
          console.log(accessToken);
          console.log(refreshToken);
        }
        else{
          // This returs a promise
          new User({
            username: profile.displayName,
            googleId: profile.id
          }).save().then(
            (newUser) => {
              console.log('New user created' + newUser);
              callback(null, newUser);
            }
          );
        }
      }
    )
  }
));

