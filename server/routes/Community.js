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
} = require("../controllers/Community");

router.get("/getDetails", auth, getCommunityDetails);
router.post("/create", auth, createCommunity);
router.put("/update", auth, updateCommunity);
router.delete("/delete", auth, deleteCommunity);
router.post("/addMember", auth, addMember);
router.post("/removeMember", auth, removeMember);
router.post("/addModerator", auth, addModerator);
router.post("/removeModerator", auth, removeModerator);

module.exports = router;
