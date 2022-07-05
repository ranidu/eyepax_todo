const todoListController = require("../todoListController");
const todoList = require("../../model/todoList");
const todos = [
  {
    title: " todo 1",
    desc: "My todo 1",
    status: true,
  },
  {
    title: " todo 2",
    desc: "My todo 2",
    status: true,
  },
];
describe("todoListController", () => {
  let res = {};
  let req = {};
  beforeAll(() => {
    res.send = jest.fn();
    res.status = jest.fn().mockReturnValue(res);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return todos", async () => {
    jest.spyOn(todoList, "find").mockReturnValue(Promise.resolve(todos));
    const resp = await todoListController.get(req, res);
    expect(res.send).toBeCalledWith(todos);
  });
  it("Should call send with 500", async () => {
    jest.spyOn(todoList, "find").mockImplementation(() => {
      throw new Error("My Error");
    });
    const resp = await todoListController.get(req, res);
    expect(res.status).toBeCalledWith(500);
    expect(res.send).toBeCalledWith({
      error: "My Error",
    });
  });
});
