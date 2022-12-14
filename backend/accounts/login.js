const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
let jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  let auth;

  if (!user) {
    return res.status(400).json({
      err: "Nu am gasit userul dorit",
    });
  }

  const hash = user.password;
  auth = bcrypt.compareSync(password, hash);

  if (!auth) {
    return res.status(400).json({ err: "Parola este incorecta" });
  }

  const token = await jwt.sign(
    { username: user, id: user.id },
    process.env.PRIVATE_KEY
  );
  res.send(token);
  res.status(200).json({ msg: "Userul a fost autentificat cu succes" });
};

module.exports = {
  login,
};
