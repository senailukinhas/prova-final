const express = require ("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioControllers");

router.post('/', usuarioController.criarUsuario);
router.post('/login', usuarioController.login);

module.exports = router;