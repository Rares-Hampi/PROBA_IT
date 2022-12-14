const express = require("express");
const router = express.Router();
const {
  addMeme,
  getMemes,
  getMeme,
  deleteMeme,
  updateMeme,
} = require("../crud/memeCrud");
const { status } = require("../middleware/mware");

router.get("/", getMemes);
router.get("/:id", getMeme);
router.post("/", status, addMeme);
router.delete("/:id", status, deleteMeme);
router.patch("/:id", status, updateMeme);

module.exports = router;
