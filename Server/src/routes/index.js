const addCharacterById = require("../controllers/addCharacterById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const Routes = require("express").Router();

Routes.get("/character/:id", addCharacterById);

Routes.get("/login", login);

Routes.post("/fav", postFav);

Routes.delete("/fav/:id", deleteFav);

module.exports = Routes;
