const express = require("express");
const passport = require("passport");
const { engine } = require("express-handlebars");
const path = require("path");
const db = require("./configs/DB");
const route = require("./routes");
const port = 3000;
const cors = require("cors");
const cookieSession = require("cookie-session");
const keys = require("./key");
require("./configs/passport");
var app = express();
//cors
app.use(cors());

//static file
app.use(express.static(path.join(__dirname, "uploads")));
console.log(path.join(__dirname, "uploads"));

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
