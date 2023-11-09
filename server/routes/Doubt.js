const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");
const {
  createDoubt,
  updateDoubt,
  deleteDoubt,
  getDoubtDetails,
} = require("../controllers/Doubt");

const { likeDoubt, unlikeDoubt } = require("../controllers/DoubtLike");

router.post("/create", auth, createDoubt);
router.put("/update", auth, updateDoubt);
router.delete("/delete", auth, deleteDoubt);
router.get("/details", auth, getDoubtDetails);

router.post("/like", auth, likeDoubt);
router.post("/unlike", auth, unlikeDoubt);

module.exports = router;
