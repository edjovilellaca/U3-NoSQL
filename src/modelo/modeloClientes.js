const neo4j = require("neo4j-driver");
let driver = neo4j.driver(
    //'neo4j://127.0.0.1',
    'neo4j://neo4j_Ges:7687',
    neo4j.auth.basic('neo4j', 'neo4j')
);

// Q14. Obtener la lista de clientes que nunca han realizado visitas a las sucursales.
// Función GET
async function sinVisitas() {
    const session = driver.session();
    try {
        const result = await session.run(`
            MATCH (c:Cliente)
            WHERE NOT (c)<-[:REALIZADA_POR]-(:Visita)
            RETURN c.nombre AS Cliente
        `);
        return result.records.map(record => record.get('Cliente'));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// QExtra: Registrar la visita de un cliente:
// Función que modifica
async function registrarVisita(fecha, hora, motivo, sucursalClave, clienteNombre) {
    const session = driver.session();
    try {
        const result = await session.run(`
            MERGE (v:Visita {fecha: date("${fecha}"), hora: time("${hora}"), motivo: "${motivo}"}) WITH v
            MATCH (s:Sucursal {clave: "${sucursalClave}"})
            MATCH (c:Cliente {nombre: "${clienteNombre}"})
            MERGE (s)-[vi:VISITA]->(v)
            MERGE (v)-[r:REALIZADA_POR]->(c)
            RETURN s, vi, v, r, c
        `);
        return result.records.map(record => ({
            Sucursal: record.get('s').properties,
            Visita: record.get('v').properties,
            Cliente: record.get('c').properties
        }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// QExtra: Registrar una reunión con un cliente y los empleados asistentes
// Función que modifica
async function registrarReunion(fecha, hora, motivo, sucursalClave, clienteNombre, empleadosCURPs) {
    const session = driver.session();
    try {
        const result = await session.run(`
            MERGE (r:Reunion {fecha: date("${fecha}"), hora: time("${hora}"), motivo: "${motivo}"})
            WITH r
            MATCH (c:Cliente {nombre: "${clienteNombre}"})
            MATCH (s:Sucursal {clave: "${sucursalClave}"})
            MATCH (e1:Empleado {CURP: "${empleadosCURPs.empleado1}"})
            MATCH (e2:Empleado {CURP: "${empleadosCURPs.empleado2}"})
            MATCH (e3:Empleado {CURP: "${empleadosCURPs.empleado3}"})
            MERGE (r)-[rn:REUNION_EN]->(s)
            MERGE (c)-[a:ASISTENCIA]->(r)
            MERGE (e1)-[a1:ASISTENCIA]->(r)
            MERGE (e2)-[a2:ASISTENCIA]->(r)
            MERGE (e3)-[a3:ASISTENCIA]->(r)
            RETURN s, r, rn, c, e1, e2, e3, a, a1, a2, a3
        `);
        return result.records.map(record => ({
            Sucursal: record.get('s').properties,
            Reunion: record.get('r').properties,
            Cliente: record.get('c').properties,
            Empleados: [
                record.get('e1').properties,
                record.get('e2').properties,
                record.get('e3').properties
            ]
        }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

module.exports = {
    sinVisitas,
    registrarVisita,
    registrarReunion
};
