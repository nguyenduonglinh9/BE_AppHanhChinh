const passport = require("passport");
const loginRouter = require("./login");
const homeRouter = require("./home");
const userRouter = require("./user");

const route = (app) => {
  //login page
  app.use("/login", loginRouter);
  // auth
  app.use("/auth", userRouter);
  //home page
  app.use("/", homeRouter);
};

module.exports = route;
