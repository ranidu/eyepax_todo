const mongoose = require("mongoose");
const chalk = require("chalk");

const connect = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://ranidu:Du5zzwU4QctzVP6N@todo.rwh8xdf.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log(
    `Mongodb connection established: ${chalk.greenBright(conn.connection.host)}`
  );
};

module.exports = connect;
