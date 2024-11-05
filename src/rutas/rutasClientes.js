const express = require('express');
const router = express.Router();
const controladorClientes = require('../controlador/controladorClientes');

// Ruta para obtener clientes sin visitas registradas
router.route('/clientes/sinVisitas').get(controladorClientes.sinVisitas);

// Ruta para registrar una visita
router.route('/clientes/registrarVisita').post(controladorClientes.registrarVisita);

// Ruta para registrar una reunión
router.route('/clientes/registrarReunion').post(controladorClientes.registrarReunion);

module.exports = router;