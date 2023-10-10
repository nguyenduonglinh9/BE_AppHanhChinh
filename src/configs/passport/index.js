const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const keys = require("../../key");
const User = require("../../models/users");

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID, // Your Credentials here.
      clientSecret: keys.googleClientSecret, // Your Credentials here.
      callbackURL: "/auth/callback",
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        console.log("Access Token :" + accessToken);
        console.log("Refresh Token :" + refreshToken);
        console.log("Profile :" + profile);

        //check exits account
        const isExistUser = await User.findOne({ googleID: profile.id });

        if (isExistUser) {
          return done(null, { ...isExistUser._doc, accessToken: accessToken });
        } else {
          const newUser = new User({
            googleID: profile.id,
            email: profile.emails[0].value,
            name: profile.name.familyName + " " + profile.name.givenName,
            createdAt: Date.now(),
            role: null,
            imageURL: profile.picture,
          });

          await newUser.save();

          done(null, { ...newUser._doc, accessToken: accessToken });
        }
      } catch (error) {
        done(error, false);
      }
    }
  )
);
