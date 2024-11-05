const modeloSucursales = require('../modelo/modeloSucursales');

async function muchosempleados(req, res) {
    try {
        const sucursales = await modeloSucursales.muchosempleados();
        res.json({ Sucursales: sucursales });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

async function presupuestoalto(req, res) {
    try {
        const proyectos = await modeloSucursales.presupuestoalto();
        res.json({ Proyectos: proyectos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

async function empleadossoporte(req, res) {
    try {
        const empleados = await modeloSucursales.empleadossoporte();
        res.json({ EmpleadosSoporte: empleados });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

async function muchostack(req, res) {
    try {
        const sucursales = await modeloSucursales.muchostack();
        res.json({ Sucursales: sucursales });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

async function transferirsoporte(req, res) {
    const { sucursalOrigen, sucursalDestino } = req.body;
    try {
        const result = await modeloSucursales.transferirsoporte(sucursalOrigen, sucursalDestino);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la transferencia de soporte técnico' });
    }
}

async function transferirfullstack(req, res) {
    const { sucursalOrigen, sucursalDestino } = req.body;
    try {
        const result = await modeloSucursales.transferirfullstack(sucursalOrigen, sucursalDestino);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la transferencia de empleados full-stack' });
    }
}

async function transferirproyecto(req, res) {
    const { proyectoClave, sucursalOrigen, sucursalDestino } = req.body;
    try {
        const result = await modeloSucursales.transferirproyecto(proyectoClave, sucursalOrigen, sucursalDestino);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la transferencia del proyecto' });
    }
}

async function transferirsucursal(req, res) {
    const { sucursalOrigen, sucursalDestino } = req.body;
    try {
        const result = await modeloSucursales.transferirsucursal(sucursalOrigen, sucursalDestino);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la transferencia de la sucursal' });
    }
}

async function crearProyectote(req, res) {
    const { codigo, nombre, descripcion, fecha_inicio, fecha_fin, presupuesto, sucursalClave, clienteNombre, gerenteCURP, empleadosCURPs } = req.body;
    try {
        const result = await modeloSucursales.crearProyectote(
            codigo, nombre, descripcion, fecha_inicio, fecha_fin, presupuesto, sucursalClave, clienteNombre, gerenteCURP, empleadosCURPs
        );
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creando el proyecto' });
    }
}

module.exports = {
    muchosempleados,
    presupuestoalto,
    empleadossoporte,
    muchostack,
    transferirsoporte,
    transferirfullstack,
    transferirproyecto,
    transferirsucursal,
    crearProyectote
};
