const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const { createTag, getAllTags, getTagDetails } = require("../controllers/Tag");

router.post("/create", auth, createTag);

router.get("/getAllTags", auth, getAllTags);
router.post("/getTagDetails", auth, getTagDetails);

module.exports = router;
