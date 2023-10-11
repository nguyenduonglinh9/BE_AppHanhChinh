const Feature = require("../models/features");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

const featuresController = {
  index: async function (req, res, next) {
    await Feature.find({})
      .then((features) => {
        res.json(features);
      })
      .catch((err) => next(err));
  },
};

module.exports = featuresController;
