const mongoose = require("mongoose");

const todoList = mongoose.model(
  "todoList",
  new mongoose.Schema(
    {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
      },
      status: {
        type: String,
        default: "active",
      },
    },
    { timestamps: true }
  )
);

module.exports = todoList;
