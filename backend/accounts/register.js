const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const addUser = async (req, res) => {
  const { username, mail, password } = req.body;
  const regex_email = /^[a-zA-Z0-9._~-]+@stud.acs.upb.ro$/;

  if (!regex_email.test(mail)) {
    res.status(404).json({
      email:
        "the field must be a valid email,the field must end in @stud.acs.upb.ro",
    });
    return;
  }
  if (password.length < 7) {
    res
      .status(404)
      .json({ password: "the field is not between 8 and 32 characters" });
    return;
  }
  if (username.length < 7) {
    res
      .status(404)
      .json({ username: "the field is not between 8 and 32 characters" });
    return;
  }

  const hash = bcrypt.hashSync(password, saltRounds);

  try {
    const user = await User.create({ username, mail, password });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addUser,
};
