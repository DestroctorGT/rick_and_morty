require("dotenv").config();

const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;

const login = function (req, res) {
  const { email, password } = req.query;

  if (DB_EMAIL === email && DB_PASSWORD === password) {
    return res.status(200).json({ access: true });
  } else {
    res.status(400).json({ access: false });
  }
};

module.exports = login;
