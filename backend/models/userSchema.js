const mongoose = require("mongoose");
const Meme = require("../models/memeSchema");

mongoose.set("strictQuery", false);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  memes: [Meme.schema],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
