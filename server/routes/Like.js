const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const { likePost } = require("../controllers/Like");

// Like a post
router.post("/post/:postId", auth, likePost);

module.exports = router;
