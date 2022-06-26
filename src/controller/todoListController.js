const { v4: uuidv4 } = require("uuid");
const todoList = require("../model/todoList.js");

module.exports.create = async function (req, res) {
  const { title, desc, status } = req.body;

  try {
    const resp = await todoList.create({
      id: uuidv4(),
      title,
      desc,
      status,
    });

    res.send(resp);
  } catch (e) {
    console.log("🚀 ~ file: todoListController.js ~ line 17 ~ e", e);
  }
};

module.exports.get = async function (req, res) {
  const { id } = req.params;

  try {
    const resp = await todoList.findById(id).exec();
    res.send(resp);
  } catch (e) {
    console.log("🚀 ~ file: todoListController.js ~ line 27 ~ e", e);
  }
};

module.exports.getById = async function (req, res) {
  const { id } = req.params;

  try {
    const resp = await todoList.find({ id });
    res.send(resp);
  } catch (e) {
    console.log("🚀 ~ file: todoListController.js ~ line 38 ~ e", e);
  }
};

module.exports.update = async function (req, res) {
  const { id: _id } = req.params;
  const { title, desc, status } = req.body;

  try {
    // const resp = await todoList
    //   .findByIdAndUpdate(
    //     { _id },
    //     {
    //       title,
    //       desc,
    //       status,
    //     }
    //   )
    //   .exec();

    const resp = await todoList.findById(_id).exec();
    resp.title = title ? title : resp.title;
    resp.desc = desc ? desc : resp.desc;
    resp.status = status ? status : resp.status;

    resp.save();

    res.send(resp);
  } catch (e) {
    console.log("🚀 ~ file: todoListController.js ~ line 50 ~ e", e);
  }
};

module.exports.delete = async function (req, res) {
  const { id: _id } = req.params;

  try {
    await todoList.deleteOne({ _id });
    res.send({ status: "Success" });
  } catch (e) {
    console.log(
      "🚀 ~ file: todoListController.js ~ line 79 ~ module.exports.delete ~ e",
      e
    );
  }
};
