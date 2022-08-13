const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const expressServer = (app, handle) => {
  let server = express();
  server.disable("x-powered-by");
  server.use(cors());
  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    handle(req, res);
  });

  return server;
};

module.exports = expressServer;
