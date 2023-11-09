const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");
const {
  deleteAccount,
  updateProfile,
  getUserDetails,
  updateProfilePicture,
  getUserPost,
  getUserMemberCommunity,
  getUserEntireDetails,
} = require("../controllers/Profile");

router.delete("/deleteProfile", auth, deleteAccount);
router.put("/updateProfile", auth, updateProfile);
router.put("/updateProfilePicture", auth, updateProfilePicture);
router.get("/getUserDetails", auth, getUserDetails);
router.get("/getUserPosts", auth, getUserPost);
router.get("/getUserMemberCommunity", auth, getUserMemberCommunity);
router.get("/getUserEntireDetails", auth, getUserEntireDetails);

module.exports = router;
