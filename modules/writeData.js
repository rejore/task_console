const fs = require("fs");

const addTask = (task, completado = false) => {
  if (task != undefined) {
    let objData = {};
    objData.task = task;
    objData.completado = completado;
    readDataFileJson(objData);
  }
};

const loadData = () => {
  let list;
  try {
    list = require("../db/task.json");
  } catch (error) {
    console.log(error);
  }
  return list;
};

const listTask = () => {
  loadData().map((item) => console.log(item.task, item.completado));
};

const updateTask = (task, completado = true) => {
  let newData = loadData().map((item) => {
    if (item.task == task) {
      item.completado = completado;
    }
    return item;
  });
  writeFileData(newData, "task update");
};

const deleteTask = (task) => {
  let data = loadData();
  let deleteIndex = data.findIndex((item) => item.task == task);
  if (deleteIndex >= 0) {
    data = data.filter((item) => item.task !== data[deleteIndex].task);
    writeFileData(data, "task delete");
  } else {
    console.log("No existe task");
  }
};

const readDataFileJson = (task) => {
  let data = loadData();
  data.push(task);
  writeFileData(data, "task add");
};

const writeFileData = (obj, message) => {
  let tasks = JSON.stringify(obj);
  fs.writeFile("db/task.json", tasks, "utf8", (err) => {
    if (err) throw err;
    console.log(message);
  });
};

module.exports = {
  addTask,
  listTask,
  updateTask,
  deleteTask,
};
