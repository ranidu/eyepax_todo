const mongoose = require("mongoose");
const chalk = require("chalk");
require("dotenv").config();

const connect = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB);
  console.log(
    `Mongodb connection established: ${chalk.greenBright(conn.connection.host)}`
  );
};

module.exports = connect;
