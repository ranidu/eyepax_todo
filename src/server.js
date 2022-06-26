var express = require("express");
// import package express to create http server
var chalk = require("chalk");
var dbConnection = require("./db/init");
var bodyParser = require("body-parser");
var router = require("./route");

var server = express();
var runningPort = 3000;
//create a server

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/api", router);

dbConnection();

server.listen(runningPort, function () {
  console.log(chalk.blue("Server started on port:", chalk.green(runningPort)));
});
