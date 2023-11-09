const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  doubts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doubt",
    },
  ],
  moderators: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  description: {
    type: String,
    trim: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Community", communitySchema);
