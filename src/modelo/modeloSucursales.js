const neo4j = require("neo4j-driver");
let driver = neo4j.driver(
    //'neo4j://127.0.0.1',
    'neo4j://neo4j_Ges:7687',
    neo4j.auth.basic('neo4j', 'neo4j')
);

// Q01. Obtener la lista de sucursales que tienen más de 5 empleados.
// Función GET
async function muchosempleados() {
    const session = driver.session();
    try {
        const result = await session.run(`
            MATCH (s:Sucursal)-[:TIENE_EMPLEADO]->(e:Empleado) 
            WITH s, COUNT(e) AS numEmpleados
            WHERE numEmpleados > 5
            RETURN s
        `);
        return result.records.map(record => record.get('s').properties);
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q04. Obtener la lista de proyectos que tienen un presupuesto mayor a $1,000,000.
// Función GET
async function presupuestoalto() {
    const session = driver.session();
    try {
        const result = await session.run(`
            MATCH (p:Proyecto)
            WHERE p.presupuesto > 1000000
            RETURN p.nombre`);
        return result.records.map(record => ({
            Proyectos: record.get('p.nombre')
        }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q05. Listar los empleados de soporte técnico de todas las sucursales
// Función GET
async function empleadossoporte() {
    const session = driver.session();
    try {
        const result = await session.run(`
            MATCH (e:Empleado) 
            WHERE e.tipo = 'Soporte Técnico' 
            RETURN e.nombre`);
        return result.records.map(record => ({
            EmpleadosSoporte: record.get('e.nombre')
        }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q10. Encontrar las sucursales que tienen más de 5 desarrolladores especializados en full-stack.
// Función GET
async function muchostack() {
    const session = driver.session();
    try {
        const result = await session.run(`
            MATCH (e:Empleado {especializacion: "Full-stack"})<-[:TIENE_EMPLEADO]-(s:Sucursal)
            WITH s, COUNT(e) AS Cantidad
            WHERE Cantidad > 1
            RETURN s.nombre`);
        return result.records.map(record => ({
            Sucursales: record.get('s.nombre')
        }));
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q11. Transferir todos los empleados de soporte técnico de una sucursal en específico hacia otra sucursal.
// Función que modifica
async function transferirsoporte(sucursalOrigen, sucursalDestino) {
    const session = driver.session();
    try {
        await session.run(`
            MATCH (s1:Sucursal {clave: "${sucursalOrigen}"})-[r:TIENE_EMPLEADO]->(e:Empleado {tipo: 'Soporte Técnico'}), 
            (s2:Sucursal {clave: "${sucursalDestino}"})
            MERGE (s2)-[:TIENE_EMPLEADO]->(e)
            DELETE r`);
        return {message: "Transferencia completada"}
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q16. Transferir todos los empleados de full-stack de una sucursal en específico hacia otra sucursal.
// Función que modifica
async function transferirfullstack(sucursalOrigen, sucursalDestino) {
    const session = driver.session();
    try {
        await session.run(`
            MATCH (s1:Sucursal {clave: "${sucursalOrigen}"})-[r:TIENE_EMPLEADO]->(e:Empleado {especializacion: "Full-stack"}), 
            (s2:Sucursal {clave: "${sucursalDestino}"})
            MERGE (s2)-[:TIENE_EMPLEADO]->(e)
            DELETE r`);
        return { message: 'Transferencia completada' }
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q13. Cambie un proyecto en específico a otra sucursal, incluyendo la totalidad de participantes en el proyecto.
// Función que modifica
async function transferirproyecto(proyectoClave, sucursalOrigen, sucursalDestino) {
    const session = driver.session();
    try {
        await session.run(`
            MATCH (p:Proyecto {clave: "${proyectoClave}"})-[ubi:UBICADO_EN]->(s1:Sucursal {clave: "${sucursalOrigen}"}),
            (s2:Sucursal {clave: "${sucursalDestino}"})
            MERGE (p)-[:UBICADO_EN]->(s2)
            DELETE ubi`);
        return { message: 'Proyecto transferido' }
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// Q15. Todos los empleados de una sucursal determinada son transferidos a otra sucursal por cierre de sucursal de origen. 
// Función que modifica
async function transferirsucursal(sucursalOrigen, sucursalDestino) {
    const session = driver.session();
    try {
        await session.run(`
            MATCH (s1:Sucursal {clave: "${sucursalOrigen}"})-[te:TIENE_EMPLEADO]->(e:Empleado),
            (s2:Sucursal {clave: "${sucursalDestino}"})
            MERGE (s2)-[:TIENE_EMPLEADO]->(e)
            DELETE te
            DETACH DELETE s1`);
        return { message: 'Sucursal cerrada y empleados transferidos' }
    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

// QExtra: Creación de un proyecto
// Función que modifica
async function crearProyectote(   codigo, nombre, descripcion, 
                                fecha_inicio, fecha_fin, presupuesto, 
                                sucursalClave, clienteNombre, 
                                gerenteCURP, empleadosCURPs) {
    const session = driver.session();

    try {
        const crearProyecto = `MERGE (p:Proyecto {codigo: $codigo, nombre: $nombre, descripcion: $descripcion, fecha_inicio: date($fecha_inicio), fecha_fin: date($fecha_fin), presupuesto: $presupuesto}) RETURN p`;
        await session.run(crearProyecto, { codigo, nombre, descripcion, fecha_inicio, fecha_fin, presupuesto });

        const asignarGerente = `MATCH (p:Proyecto {codigo: $codigo}), (e:Empleado {CURP: $gerenteCURP})
                                    MERGE (e)-[:GESTIONA]->(p)
                                    RETURN p, e`;
        await session.run(asignarGerente, { codigo, gerenteCURP });

        /* for (const curp of empleadosCURPs) {
            const asignarEmpleados = `MATCH (p:Proyecto {codigo: $codigo}), (e:Empleado {CURP: $curp})
                                         MERGE (e)-[:TRABAJA_EN]->(p)
                                         RETURN p, e`;
           await session.run(asignarEmpleados, { codigo, curp });
        } */
       
       let curps = [];

        Object.keys(empleadosCURPs).forEach(function(key) {
            curps.push(empleadosCURPs[key]);    
        });
        
        const curp1 = curps[0];
        const curp2 = curps[1];
        const curp3 = curps[2];

        const asignarEmpleados1 = `MATCH (p:Proyecto {codigo: $codigo}), (e:Empleado {CURP: $curp1})
                                       MERGE (e)-[:TRABAJA_EN]->(p)
                                       RETURN p, e`;
                                       
        const asignarEmpleados2 = `MATCH (p:Proyecto {codigo: $codigo}), (e:Empleado {CURP: $curp2})
                                       MERGE (e)-[:TRABAJA_EN]->(p)
                                       RETURN p, e`; 
                                       
        const asignarEmpleados3 = `MATCH (p:Proyecto {codigo: $codigo}), (e:Empleado {CURP: $curp3})
                                       MERGE (e)-[:TRABAJA_EN]->(p)
                                       RETURN p, e`;                                       
        
        await session.run(asignarEmpleados1, { codigo, curp1 });
        await session.run(asignarEmpleados2, { codigo, curp2 });
        await session.run(asignarEmpleados3, { codigo, curp3 });
                                        
        const asignarSucursal = `MATCH (s:Sucursal {clave: $sucursalClave}), (p:Proyecto {codigo: $codigo})
                                 MERGE (p)-[:UBICADO_EN]->(s)
                                 RETURN s, p`;
        await session.run(asignarSucursal, { codigo, sucursalClave });

        const asignarCliente = `MATCH (c:Cliente {nombre: $clienteNombre}), (p:Proyecto {codigo: $codigo})
                                MERGE (c)-[:CONTRATA]->(p)
                                RETURN c, p`;
        await session.run(asignarCliente, { codigo, clienteNombre });

        return { message: 'Proyecto creado correctamente' }

    } catch (error) {
        throw error;
    } finally {
        await session.close();
    }
}

module.exports = {  muchosempleados, 
                    presupuestoalto, 
                    empleadossoporte, 
                    muchostack, 
                    transferirsoporte, 
                    transferirfullstack, 
                    transferirproyecto, 
                    transferirsucursal,
                    crearProyectote };