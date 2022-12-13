const express = require("express");
const router = express.Router();
const {
  addMeme,
  getMemes,
  getMeme,
  deleteMeme,
  updateMeme,
} = require("../crud/memeCrud");

router.get("/", getMemes);
router.get("/meme/:id", getMeme);
router.post("/", addMeme);
router.delete("/:id", deleteMeme);
router.patch("/:id", updateMeme);

module.exports = router;
