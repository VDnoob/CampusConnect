const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");
const {
  createCommunity,
  updateCommunity,
  deleteCommunity,
  getCommunityDetails,
  addMember,
  removeMember,
  addModerator,
  removeModerator,
  updateCommunityPicture,
  updateCommunityCoverPage,
  getAllCommunities,
  getCommunityPosts,
  getCommunityDoubts,
} = require("../controllers/Community");

router.post("/getDetails", auth, getCommunityDetails);
router.post("/create", auth, createCommunity);
router.put("/update", auth, updateCommunity);
router.post("/delete", auth, deleteCommunity);
router.post("/addMember", auth, addMember);
router.post("/removeMember", auth, removeMember);
router.post("/addModerator", auth, addModerator);
router.post("/removeModerator", auth, removeModerator);
router.get("/getAllCommunities", auth, getAllCommunities);
router.put("/updatePicture", auth, updateCommunityPicture);
router.put("/updateCoverpage", auth, updateCommunityCoverPage);
router.post("/getCommunityPosts", auth, getCommunityPosts);
router.post("/getCommunityDoubts", auth, getCommunityDoubts);

module.exports = router;
