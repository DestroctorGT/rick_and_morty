let myFavorites = [];

const postFav = function (req, res) {
  const { id, status, name, species, origin, image, gender } = req.body;

  myFavorites.push({ id, status, name, species, origin, image, gender });

  res.status(200).json(myFavorites);
};

const deleteFav = function (req, res) {
  const { id } = req.params;

  try {
    if (id !== ":id") {
      const newFavorites = myFavorites.filter((ch) => ch.id !== Number(id));

      myFavorites = newFavorites;

      res.status(200).json(myFavorites);
    } else {
      res.status(404).json({ message: "id not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  postFav,
  deleteFav,
};
