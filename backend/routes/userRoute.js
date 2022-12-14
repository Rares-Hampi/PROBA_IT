const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../crud/userCrud");
const { login } = require("../accounts/login");
const { addUser } = require("../accounts/register");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/register", addUser);
router.delete("/delete/:id", deleteUser);
router.patch("/update/:id", updateUser);
router.get("/login/user", login);
module.exports = router;
