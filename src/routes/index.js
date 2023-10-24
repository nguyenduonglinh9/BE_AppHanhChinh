const passport = require("passport");
const loginRouter = require("./login");
const homeRouter = require("./home");
const userRouter = require("./user");
const featuresRouter = require("./features");
const authenRouter = require("./Authen");
const ticketRouter = require("./ticket");
const buildingRouter = require("./build");
const roomRouter = require("./Room");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { storage } = require("../../storage/storage");
const multer = require("multer");
const upload = multer({ storage });

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
  //builds
  app.use("/building", buildingRouter);
  //room
  app.use("/room", roomRouter);
  //upload
  app.use("/upload", upload.array("images"), (req, res) => {
    if (req.files) {
      res.json({ message: req.files[0].path });
    } else {
      res.json({ message: "LỖI" });
    }
  });
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
