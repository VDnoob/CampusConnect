const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
    enum: ["Admin", "Student", "Professor"],
  },
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },
  community: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
  profilePicture: {
    type: String,
  },
  coverPicture: {
    type: String,
  },
  token: {
    type: String,
  },
  reserPasswordExpires: {
    type: Date,
  },
  interestedTags: [
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
  contribution: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
