const express = require('express');
const router = express.Router();
const controladorSucursales = require('../controlador/controladorSucursales');

// Lista de sucursales con más de 5 empleados
router.route('/sucursales/muchosempleados').get(controladorSucursales.muchosempleados);

// Lista de proyectos con presupuesto mayor a $1,000,000
router.route('/proyectos/presupuestoalto').get(controladorSucursales.presupuestoalto);

// Listado de los empleados de soporte técnico de todas las sucursales
router.route('/empleados/soporte').get(controladorSucursales.empleadossoporte);

// Sucursales con más de 5 desarrolladores full-stack
router.route('/sucursales/muchostack').get(controladorSucursales.muchostack);

// Transferir empleados de soporte técnico entre sucursales
router.route('/empleados/transferirsoporte').post(controladorSucursales.transferirsoporte);

// Transferir empleados full-stack entre sucursales
router.route('/empleados/transferirfullstack').post(controladorSucursales.transferirfullstack);

// Transferir un proyecto específico entre sucursales
router.route('/proyectos/transferir').post(controladorSucursales.transferirproyecto);

// Transferir todos los empleados de una sucursal a otra por cierre de sucursal
router.route('/sucursales/transferir').post(controladorSucursales.transferirsucursal);

// Crear un nuevo proyecto
router.route('/proyectos/crear').post(controladorSucursales.crearProyectote);

module.exports = router;
