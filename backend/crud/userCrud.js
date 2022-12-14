const User = require("../models/userSchema");
const mongoose = require("mongoose");

const getUsers = async (req, res) => {
  const users = await User.find({});

  res.status(200).json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Nu am gasit userul dorit" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      err: "Nu am gasit userul dorit",
    });
  }

  res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Id-ul nu este corect" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ err: "Nu am gasit userul dorit" });
  }

  res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Id-ul nu este corect" });
  }

  const user = await User.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!user) {
    return res.status(400).json({ err: "Nu am gasit userul dorit" });
  }

  res.status(200).json(user);
};

module.exports = {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
