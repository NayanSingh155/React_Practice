const { model, Schema, now } = require("mongoose");
const blogSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  deleted: { type: Boolean, default: false },
  category: [{
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "like",
    required: true,
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "comment",
    required: true,
  }]
});

module.exports = model("blog", blogSchema);
