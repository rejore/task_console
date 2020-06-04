const options_desc = {
  descripcion: {
    demand: true,
    alias: "d",
    desc: "descripcion de la tarea",
  },
};

const argv = require("yargs")
  .command("crear", "comando para crear una tarea", options_desc)
  .command("listar", "comando para listar tareas", {})
  .command("actualizar", "comando para actualizar una tarea", options_desc)
  .command("eliminar", "comando para eliminar una tarea", options_desc)
  .help().argv;

module.exports = {
  argv,
};
