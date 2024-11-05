const modeloEmpleados = require('../modelo/modeloEmpleados');

async function gerentesProyectos(req, res) {
    try {
        const gerentes = await modeloEmpleados.gerentesProyectos();
        res.json({ Gerentes: gerentes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

async function desarrolladoresBackend(req, res) {
    try {
        const desarrolladores = await modeloEmpleados.desarrolladoresBackend();
        res.json({ Desarrolladores: desarrolladores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

async function empleadosSoporteTecnico(req, res) {
    try {
        const empleadosSoporte = await modeloEmpleados.empleadosSoporteTecnico();
        res.data = empleadosSoporte
        res.json({ EmpleadosSoporte: empleadosSoporte });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

async function desarrolladoresPresupuesto(req, res) {
    try {
        const desarrolladores = await modeloEmpleados.desarrolladoresPresupuesto();
        res.data = desarrolladores
        res.json({ Desarrolladores: desarrolladores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

module.exports = {
    gerentesProyectos,
    desarrolladoresBackend,
    empleadosSoporteTecnico,
    desarrolladoresPresupuesto
};