let jwt = require("jsonwebtoken");
require("dotenv").config();

const status = (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    res.status(401).json({ err: "Nu ai permisiune sa faci aceasta actiune" });
  }

  next();
};

module.exports = {
  status,
};
