const express = require('express');
const router = express.Router();
const controladorEmpleados = require('../controlador/controladorEmpleados');

// Ruta para obtener la lista de gerentes de proyectos
router.route('/empleados/gerentesProyectos').get(controladorEmpleados.gerentesProyectos);

// Ruta para obtener la lista de desarrolladores backend
router.route('/empleados/desarrolladoresBackend').get(controladorEmpleados.desarrolladoresBackend);

// Ruta para obtener la lista de empleados de soporte técnico
router.route('/empleados/soporteTecnico').get(controladorEmpleados.empleadosSoporteTecnico);

// Ruta para obtener la lista de desarrolladores con presupuesto mayor a $500,000
router.route('/empleados/desarrolladoresPresupuesto').get(controladorEmpleados.desarrolladoresPresupuesto);

module.exports = router;
