const Like = require("../models/Like");

// Like a post
exports.likePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    // Check if the user has already liked the post
    const existingLike = await Like.findOne({ post: postId, likedBy: req.user.id });

    if (existingLike) {
      return res.status(400).json({
        success: false,
        message: "You have already liked this post",
      });
    }

    const like = new Like({
      post: postId,
      likedBy: req.user.id,
    });

    await like.save();

    res.status(200).json({
      success: true,
      message: "Post liked successfully",
      data: like,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
