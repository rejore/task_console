const yargs = require("./config/yargs.js").argv;
const task = yargs._[0];
const {
  addTask,
  listTask,
  deleteTask,
  updateTask,
} = require("./modules/writeData.js");

if (task == "crear") {
  addTask(yargs.d);
} else if (task == "actualizar") {
  updateTask(yargs.d);
} else if (task == "listar") {
  listTask();
} else if (task == "eliminar") {
  deleteTask(yargs.d);
}
