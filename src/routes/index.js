const loginRouter = require("./login");
const homeRouter = require("./home");
const userRouter = require("./user");
const featuresRouter = require("./features");
const authenRouter = require("./Authen");
const ticketRouter = require("./ticket");
const buildingRouter = require("./build");
const roomRouter = require("./Room");
const issuesTypeRouter = require("./issuestypes");
const issueRouter = require("./issues");
const { createProxyMiddleware } = require("http-proxy-middleware");
const multer = require("multer");
const fileUpload = require("../configs/Cloudinary/index");

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
  app.use("/upload", fileUpload.array("images"), (req, res, next) => {
    if (!req.files) {
      res.json({
        code: 400,
        message: "Không có file được chọn",
      });
    }

    res.json({ code: 200, message: req.files });
  });

  //issues Type
  app.use("/issuestype", issuesTypeRouter);
  //issues
  app.use("/issues", issueRouter);
  //home page
  app.use("/", (req, res, next) => {
    res.send("HELLO");
  });
};

module.exports = route;
