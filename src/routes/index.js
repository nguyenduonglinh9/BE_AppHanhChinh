const passport = require("passport");
const loginRouter = require("./login");
const homeRouter = require("./home");
const userRouter = require("./user");
const featuresRouter = require("./features");
const authenRouter = require("./Authen");
const ticketRouter = require("./ticket");
const { createProxyMiddleware } = require("http-proxy-middleware");

const route = (app) => {
  //login page
  app.use(
    "/login",
    loginRouter,
    createProxyMiddleware({
      target: "http://127.0.0.1:3001",
      changeOrigin: true,
    })
  );
  //render features
  app.use(
    "/features",
    featuresRouter,
    createProxyMiddleware({
      target: "http://127.0.0.1:3001",
      changeOrigin: true,
    })
  );
  //login
  app.use("/authentication", authenRouter);
  //get user
  app.use("/user", userRouter);
  //ticket
  app.use("/ticket", ticketRouter);
  //home page
  app.use(
    "/",
    homeRouter,
    createProxyMiddleware({
      target: "http://127.0.0.1:3001",
      changeOrigin: true,
    })
  );
};

module.exports = route;
