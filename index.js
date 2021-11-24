const express = require("express");
const passport = reqiure("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

passport.use(new GoogleStrategy());

app.use(passport.initialize());
app.use(passport.session());

app.listen(5000);

//
//
