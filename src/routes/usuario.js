const express = require('express')
const ControllerUsuario = require('../controllers/usuario')

// Inicializando as rotas do express
const router = express.Router()

// Criando as rotas
router.get('/', controllerUsuario.GetUsuario)
router.post('/', controllerUsuario.CreateUsuario)
router.put('/:id', controllerUsuario.UpdateUsuario)
router.delete('/:id', controllerUsuario.DeleteUsuario)

// Exportar as rotas
module.exports = router