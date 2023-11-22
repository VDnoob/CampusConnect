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
  updateCommunityPicture, // Add this line
  updateCommunityCoverPage, // Add this line
} = require("../controllers/Community");

router.get("/getDetails", auth, getCommunityDetails);
router.post("/create", auth, createCommunity);
router.put("/update", auth, updateCommunity);
// router.put("/update", auth, updateCommunity); // aa add karyu 
// router.put("/update/picture", auth, updateCommunityPicture); // aa add karyu 
// router.put("/update/coverpage", auth, updateCommunityCoverPage); // aa add karyu 
router.delete("/delete", auth, deleteCommunity);
router.post("/addMember", auth, addMember);
router.post("/removeMember", auth, removeMember);
router.post("/addModerator", auth, addModerator);
router.post("/removeModerator", auth, removeModerator);

router.put("/update/picture", auth, updateCommunityPicture);
router.put("/update/coverpage", auth, updateCommunityCoverPage);


module.exports = router;
