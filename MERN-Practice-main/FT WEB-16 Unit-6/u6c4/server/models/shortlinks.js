const mongoose = require("mongoose");

const link = mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    shortid: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("ShortLink", link);
