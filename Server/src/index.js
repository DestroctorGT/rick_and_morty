var http = require("http");
var getCharById = require("./controllers/getCharById");

const PORT = 3001;

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const url = req.url.split("/");
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];

    if (param1 === "rickandmorty" && param2 === "character") {
      if (id) {
        getCharById(res, id);
      }
    }
  })
  .listen(PORT, () => {
    console.log("In port http://localhost:3001");
  });
