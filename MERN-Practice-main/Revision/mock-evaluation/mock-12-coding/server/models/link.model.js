const { Schema, model } = require("mongoose");
const shortId = require("shortid");

const urlSchema = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
});

module.exports = model("ShortUrl", urlSchema);
