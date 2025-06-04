const express = require ("express");
const router = express.Router();
const tarefasController = require("../Controllers/tarefasControllers");

router.post("/", tarefasController.criartarefas);
router.get("/",tarefasController.listartarefas);
router.put("/:id", tarefasController.atualizartarefas);
router.delete("/:id", tarefasController.deletartarefas);

module.exports = router;