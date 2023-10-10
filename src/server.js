const express = require("express");
const passport = require("passport");
const { engine } = require("express-handlebars");
const path = require("path");
const db = require("./configs/DB");
const route = require("./routes");
const port = 3000;
require("./configs/passport");
var app = express();
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//connect to db
db.connect();
//static file
app.use(express.static(path.join(__dirname, "public")));

//middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//router init
route(app);

//passport
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: "SECRET",
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
