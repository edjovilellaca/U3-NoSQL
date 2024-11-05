const modeloClientes = require('../modelo/modeloClientes');

async function sinVisitas(req, res) {
    try {
        const visitant = await modeloClientes.sinVisitas();
        res.json({ ClientesSinVisitas: visitant });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

async function registrarVisita(req, res) {
    const { fecha, hora, motivo, sucursalClave, clienteNombre } = req.body;
    try {
        const visita = await modeloClientes.registrarVisita(fecha, hora, motivo, sucursalClave, clienteNombre);
        res.json({ RegistroVisita: visita });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

async function registrarReunion(req, res) {
    const { fecha, hora, motivo, sucursalClave, clienteNombre, empleadosCURPs } = req.body;
    try {
        const reunion = await modeloClientes.registrarReunion(fecha, hora, motivo, sucursalClave, clienteNombre, empleadosCURPs);
        res.json({ RegistroReunion: reunion });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error ejecutando la consulta' });
    }
}

module.exports = {
    sinVisitas,
    registrarVisita,
    registrarReunion
};

