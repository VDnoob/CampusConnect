const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");
const {
  createDoubt,
  updateDoubt,
  deleteDoubt,
  getDoubtDetails,
  getDoubts,
} = require("../controllers/Doubt");

const { likeDoubt, unlikeDoubt } = require("../controllers/DoubtLike");

router.post("/create", auth, createDoubt);
router.put("/update", auth, updateDoubt);
router.post("/delete", auth, deleteDoubt);
router.post("/details", auth, getDoubtDetails);
router.get("/getallDoubts", auth, getDoubts);

router.post("/like", auth, likeDoubt);
router.post("/unlike", auth, unlikeDoubt);

module.exports = router;
