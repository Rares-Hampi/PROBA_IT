const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const memeSchema = new mongoose.Schema({
  username: { type: String, required: true },
  img: { type: String, required: true },
  descriere: { type: String, required: true },
});

const Meme = mongoose.model("Meme", memeSchema);
module.exports = Meme;
