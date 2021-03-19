var express = require('express');
var router = express.Router();
const usuariosController = require("../controllers/usuariosController");

/* GET users listing. */
router.get('/', usuariosController.index);
router.get('/crear', usuariosController.crear);


router.post("/", usuariosController.guardar);
router.post("/eliminar/:id", usuariosController.eliminar)
router.post('/editar/:id', usuariosController.editar);

router.post('/editar', usuariosController.editar);
router.post("/actualizar", usuariosController.actualizar);

module.exports = router;
