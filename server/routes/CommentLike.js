const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const { likeComment } = require("../controllers/commentLike");

// Like a comment
router.post("/comment/:commentId", auth, likeComment);

module.exports = router;
