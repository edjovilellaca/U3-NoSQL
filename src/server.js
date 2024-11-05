const express = require('express');
const app = express();
const neo4j = require("neo4j-driver");
const bodyParser = require('body-parser');
const PORT = 3000;

const rutaCliente = require('./rutas/rutasClientes');
const rutaEmpleado = require('./rutas/rutasEmpleados');
const rutaSucursal = require('./rutas/rutasSucursales');
const logger = require('./rutas/logger');

//middlewares   
app.use(logger);
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use('/api', rutaCliente, rutaEmpleado, rutaSucursal);
app.listen(PORT, () => { console.log('Server en http://localhost:' + PORT) });