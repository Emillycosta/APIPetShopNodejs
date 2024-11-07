const express = require('express')
const ControllerCliente = require('../controllers/cliente')

// Inicializando as rotas do express
const router = express.Router()

// Criando as rotas
router.get('/', ControllerCliente.GetCliente)
router.post('/', controllerCliente.CreateCliente)
router.put('/:id', controllerCliente.UpdateCliente)
router.delete('/:id', controllerCliente.DeleteCliente)

// Exportar as rotas
module.exports = router