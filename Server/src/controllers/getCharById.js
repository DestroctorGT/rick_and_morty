var axios = require("axios");

const getCharById = function getCharById(res, id) {
  axios(`https://rickandmortyapi.com/api/character/:${id}`)
    .then((ch) => {
      let character = {
        id,
        name: ch.data.name,
        gender: ch.data.gender,
        origin: ch.data.image,
        status: ch.data.status,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end({ message: err });
    });
};

module.exports = { getCharById };
