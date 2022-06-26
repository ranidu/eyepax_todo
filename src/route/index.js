const express = require("express");
const todoController = require("../controller/todoListController");

const router = express.Router();

router.post("/todo", async function (req, res, next) {
  await todoController.create(req, res);
});

router.get("/todo/:id", async function (req, res, next) {
  await todoController.get(req, res);
});

router.get("/todo/:id/get", async function (req, res, next) {
  await todoController.getById(req, res);
});

router.put("/todo/:id", async function (req, res, next) {
  await todoController.update(req, res);
});

router.delete("/todo/:id", async function (req, res, next) {
  await todoController.delete(req, res);
});

module.exports = router;
