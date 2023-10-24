const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dznigtf2h",
  api_key: "565637355553974",
  api_secret: "WMVyEiylLdfpXhSm9JE7MVJxsp8",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "CloudinaryDemo",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

module.exports = {
  storage,
};
