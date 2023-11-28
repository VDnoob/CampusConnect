const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");
const {
  createPost,
  updatePost,
  deletePost,
  getPostDetails,
  getPosts,
} = require("../controllers/Post");

const { likePost, unlikePost } = require("../controllers/PostLike");

router.post("/create", auth, createPost);
router.put("/update", auth, updatePost);
router.delete("/delete", auth, deletePost);
router.get("/details", auth, getPostDetails);
router.get("/getAllPosts", auth, getPosts);

router.post("/like", auth, likePost);
router.post("/unlike", auth, unlikePost);

module.exports = router;
