const Meme = require("../models/memeSchema");
const User = require("../models/userSchema");
const mongoose = require("mongoose");

const getMemes = async (req, res) => {
  const meme = await Meme.find({});

  res.status(200).json(meme);
};

const getMeme = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Nu am gasit userul dorit" });
  }

  const meme = await Meme.findById(id);

  if (!meme) {
    return res.status(404).json({
      err: "Nu am gasit userul dorit",
    });
  }

  res.status(200).json(meme);
};

const addMeme = async (req, res) => {
  const { username, img, descriere } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ err: "Nu am gasit userul dorit" });
  }
  if (descriere.lenth > 2500) {
    return res
      .status(400)
      .json({ descriere: "the field is not between 0 and 2500 characters" });
  }

  console.log(user);
  try {
    const meme = await Meme.create({ username, img, descriere });

    user.memes.push(meme);
    await user.save();

    res.status(200).json(meme);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteMeme = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ err: "Nu am gasit userul dorit" });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Id-ul nu este corect" });
  }

  const meme = await Meme.findOneAndDelete({ _id: id });

  if (!meme) {
    return res.status(400).json({ err: "Nu am gasit meme-ul dorit" });
  }

  user.memes = user.memes.filter((item) => {
    return item.id != meme.id;
  });

  await user.save();

  res.status(200).json(meme);
};

const updateMeme = async (req, res) => {
  const { id } = req.params;
  const { username, descriere } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ err: "Nu am gasit userul dorit" });
  }

  if (descriere.lenth > 2500) {
    return res
      .status(400)
      .json({ descriere: "the field is not between 0 and 2500 characters" });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Id-ul nu este corect" });
  }
  const meme = await Meme.findByIdAndUpdate({ _id: id }, { descriere });

  if (!meme) {
    return res.status(400).json({ err: "Nu am gasit userul dorit" });
  }
  user.memes = user.memes.filter((item) => {
    if (item.id == meme.id) {
      item.descriere = descriere;
    }
    return item;
  });
  await user.save();

  res.status(200).json(meme);
};

module.exports = {
  addMeme,
  getMemes,
  getMeme,
  deleteMeme,
  updateMeme,
};
