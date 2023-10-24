const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploadFile = multer({ storage: storage });

module.exports = uploadFile;
