const neo4j = require("neo4j-driver");
let driver = neo4j.driver(
    //'neo4j://127.0.0.1',
    'neo4j://neo4j_Ges:7687',
    neo4j.auth.basic('neo4j', 'neo4j')
);

// Q01. Obtener la lista de sucursales que tienen más de 5 empleados.
// Función GET
async function gerentesProyectos() {
    const session = driver.session();
    try {
        const result = await session.run(`
            MATCH (e:Empleado)-[:GESTIONA]->(p:Proyecto)
            WITH e, COUNT(p) AS numProyectos
            WHERE numProyectos > 3
            RETURN e
        `);
        return result.records.map(record => record.get('e').properties);
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

async function desarrolladoresBackend() {
    const session = driver.session();
    try {
        const result = await session.run(`
            MATCH (e:Empleado) 
            WHERE e.tipo = 'Soporte Técnico' 
            RETURN e.nombre
        `);
        return result.records.map(record => record.get('e.nombre'));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

async function empleadosSoporteTecnico() {
    const session = driver.session();
    try {
        const result = await session.run(`
            MATCH (e:Empleado) 
            WHERE e.tipo = 'Soporte Técnico' 
            RETURN e.nombre
        `);
        return result.records.map(record => record.get('e.nombre').properties);
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

async function desarrolladoresPresupuesto() {
    const session = driver.session();
    try {
        const result = await session.run(`
            MATCH (d:Empleado)-[:TRABAJA_EN]->(p:Proyecto)
            WITH d, SUM(p.presupuesto) AS totalPresupuesto
            WHERE totalPresupuesto > 500000
            RETURN d.nombre AS desarrollador, totalPresupuesto
        `);
        return result.records.map(record => ({
            nombre: record.get('desarrollador'),
            presupuesto: record.get('totalPresupuesto')
        }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}



module.exports = { 
    gerentesProyectos, 
    desarrolladoresBackend, 
    empleadosSoporteTecnico, 
    desarrolladoresPresupuesto 
};