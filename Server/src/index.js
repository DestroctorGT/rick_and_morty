const express = require("express");
const app = express();
const Router = require("./routes/index");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const urlencoded = express.urlencoded({ extended: false });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());

app.use("/rickandmorty", Router);

app.listen(PORT, () => {
  console.log(`In port: http://localhost:${PORT}`);
});
