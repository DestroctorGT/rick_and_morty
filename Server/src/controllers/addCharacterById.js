const axios = require("axios");
require("dotenv").config(); // process.env

const URL = process.env.API_URL;

const addCharacterById = function getCharById(req, res) {
  const { id } = req.params;

  axios.get(`${URL}${id}`).then(({ data }) => {
    try {
      if (data) {
        res.status(200).json({
          id: data.id,
          status: data.status,
          name: data.name,
          species: data.species,
          origin: data.origin.name,
          image: data.image,
          gender: data.gender,
        });
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });
};

module.exports = addCharacterById;
