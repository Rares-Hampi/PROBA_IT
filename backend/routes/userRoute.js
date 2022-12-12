const express = require("express");
const router = express.Router();
const {
  addUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../crud/crud");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/add", addUser);
router.delete("/delete/:id", deleteUser);
router.patch("/update/:id", updateUser);

module.exports = router;
