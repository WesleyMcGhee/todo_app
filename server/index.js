const express = require("express");
const app = express();
const cors = require("cors");
const ctrl = require("./controller");
const port = 4000;

app.use(express.json());
app.use(cors());

app.post("/todos", ctrl.addTodo);
app.get("/todos", ctrl.getAllTodos);
app.get("/todos:id", ctrl.getTodos);
app.put("/todo:id", ctrl.updateTodo);
app.delete("/todo:id", ctrl.deleteTodo);

app.listen(port, () => console.log(`Server is up and running on ${port}...`));
