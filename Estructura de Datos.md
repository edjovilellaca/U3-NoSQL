# Estructura de Datos
## Escenario
Gestión Empresarial. 
La empresa "TechSoft" desea gestionar sus empleados, proyectos y sucursales a nivel nacional. 
Se requiere un sistema para administrar las diferentes áreas de trabajo y operaciones de la empresa.

Sucursales:
    - Cada sucursal tiene una clave, nombre, dirección, ciudad y capacidad (número máximo de empleados que puede albergar).
    - Cada sucursal tiene empleados exclusivos; es decir, un empleado solo puede trabajar en una sucursal a la vez.

Sucursal: - (Nodo)
    - Clave - (Atributo)
    - Nombre - (Atributo)
    - Dirección - (Atributo)
    - Ciudad - (Atributo)
    - Capacidad (Numero maximo de empleados que puede albergar) - (Atributo)
        - Empleados exclusivos (Cada empleado solo puede trabajar en una sucursal) - (condición - Ej: Empleado Juan Perez con clave 'ABC123' no puede trabajar en dos sucursales distintas)

Empleados: 
    - Cada empleado tiene un ID único, nombre, CURP, teléfono, número de cuenta bancaria (donde se deposita el sueldo) y fecha de contratación.
    - Hay tres tipos de empleados en cada sucursal:
    - Gerentes: responsables de supervisar la operación. Se requiere saber el área que gestionan.
    - Desarrolladores: Se requiere su especialización (back-end, front-end, full-stack), su lenguaje principal y el número de proyectos activos.
    - Soporte técnico: Se requiere el tipo de soporte que brindan (infraestructura, software, hardware) y su número de contacto interno.

Empleado: (Nodo)
    - CURP - (Atributo)
    - Nombre - (Atributo)
    - Telefono - (Atributo)
    - Número de cuenta bancaria - (Atributo)
    - Fecha de contratación - (Atributo)
        - 3 tipos de empleados - (Atributo)
            - Gerentes: Area que gestiona - (Relación con proyecto)
            - Desarrolladores: Especialización (back-end, front-end, full-stack) - (Atributo)
                - lenguaje - (Atributo) 
                - proyectos activos - (Relación con proyectos)
            - Soporte Técnico: Tipo de soporte (infraestructura, software, hardware) - (Atributo)
            - número de contacto interno - (Atributo)

Proyectos:
    - Los proyectos tienen un código, nombre, descripción, fecha de inicio, fecha de finalización y un presupuesto 
      asignado.
    - Cada proyecto es gestionado por un gerente y puede tener varios desarrolladores trabajando en él.
    - Un proyecto es desarrollado en una sucursal específica, pero puede involucrar a empleados de otras sucursales.

Proyectos: - (Nodo)
    - Código - (Atributo)
    - Nombre - (Atributo)
    - Descripción - (Atributo)
    - Fecha de Inicio - (Atributo)
    - Fecha de Finalización - (Atributo)
    - Presupuesto - (Atributo)
        - Cada proyecto es gestionado por un gerente y puede tener varios desarrolladores. - (Relación con empleados)
        - Cada proyecto es de una sucursal especifica, pero puede tener empleados de otras sucursales. - (Relación con sucursal)

Clientes:
    - Cada proyecto está asociado a un cliente, y se requiere su nombre, empresa, teléfono de contacto y correo 
      electrónico.
    - Un cliente puede contratar múltiples proyectos en diferentes sucursales.

Clientes: - (Nodo)
    - Nombre - (Atributo)
    - Empresa - (Atributo)
    - Telefono de contacto - (Atributo)
    - Correo electrónico - (Atributo)
        - Proyecto asociado a cliente - (Relación con cliente)
        - Un cliente puede tener varios proyectos en diferentes sucursales - (Relación con cliente, mismo que la pasada, pero solo implica que un cliente puede tener mas de un proyecto)

Reuniones y visitas:
    - Las sucursales tienen reuniones con clientes. Se debe registrar el cliente, la fecha, la hora y los asistentes 
      de la reunión (empleados de la empresa).
    - Se realizan visitas a las sucursales por parte de los clientes, registrando la fecha, hora, cliente, y motivo 
      de la visita.

Reuniones: (Reunion hecha con los clientes) - (Nodo)
    - Cliente - (Relación)
    - Fecha - (Atributo)
    - Hora - (Atributo)
    - Asistentes de la reunion (empleados) - (Varias relaciones)

Visitas: (Visitas a las sucursales de los clientes) - (Relación)
    - Fecha - (Atributo)
    - Hora - (Atributo)
    - Cliente - (Relación con nodo Cliente)
    - Motivo de visita - (Atributo)

### Consultas (Querys):
Q00. Script del escenario de datos. //ya
Q01. Obtener la lista de sucursales que tienen más de 5 empleados. //Ya
Q02. Encontrar los gerentes que gestionan más de 3 proyectos simultáneamente. //Ya
Q03. Obtener la lista de desarrolladores con especialización en back-end que están trabajando en más de 2 proyectos. //Ya
Q04. Obtener la lista de proyectos que tienen un presupuesto mayor a $1,000,000. //Ya
Q05. Listar los empleados de soporte técnico de todas las sucursales. //Ya
Q06. Encontrar los proyectos que corresponden a un cliente en específico. //Ya
Q07. Obtener la lista de sucursales que han recibido visitas de más de 5 clientes diferentes.
Q08. Encontrar a los desarrolladores que han trabajado en proyectos con un presupuesto total mayor a $500,000.
Q09. Obtener la lista de clientes que han contratado más de 3 proyectos en diferentes sucursales.
Q10. Encontrar las sucursales que tienen más de 5 desarrolladores especializados en full-stack.
Q11. Transferir todos los empleados de soporte técnico de una sucursal en específico hacia otra sucursal.
Q12. Reemplaza al gerente de una sucursal en específico..
Q13. Cambie un proyecto en específico a otra sucursal, incluyendo la totalidad de participantes en el proyecto .
Q14. Obtener la lista de clientes que nunca han realizado visitas a las sucursales.
Q15. Todos los empleados de una sucursal determinada son transferidos a otra sucursal por cierre de sucursal de origen.

<!-- Modelado -->
## Sucursales
MERGE (s:Sucursal {clave: 'SUC1', nombre: 'Sucursal Nayarit',      direccion: 'Av. Insurgentes 12',    ciudad: 'Tepic',      capacidad: 10}) RETURN s;
MERGE (s:Sucursal {clave: 'SUC2', nombre: 'Sucursal Guadalajara',  direccion: 'Av. Mexico 34',         ciudad: 'Zapopan',    capacidad: 10}) RETURN s;
MERGE (s:Sucursal {clave: 'SUC3', nombre: 'Sucursal CDMX',         direccion: 'Av. Tecnológico 56',    ciudad: 'Iztacalco',  capacidad: 10}) RETURN s;
MERGE (s:Sucursal {clave: 'SUC4', nombre: 'Sucursal Tamaulipas',   direccion: 'Av. Del Ejército 78',   ciudad: 'Reynosa',    capacidad: 10}) RETURN s;
MERGE (s:Sucursal {clave: 'SUC5', nombre: 'Sucursal Monterrey',    direccion: 'Av. De la Cultura 90',  ciudad: 'Apodaca',    capacidad: 10}) RETURN s;
MERGE (s:Sucursal {clave: 'DOOM', nombre: 'Sucursal Pa Borrar',    direccion: 'Boulevard 173',         ciudad: 'Tepito',     capacidad: 10}) RETURN s;


## Empleados - Gerentes
MERGE (e:Empleado {nombre: "Ana Gómez",      CURP: "GOMA901202MDFRRN03", telefono: "555-1234", cuentaBancaria: "1234567890", fechaContratacion: "1990-12-02", tipo: "Gerente"}) RETURN e;  // Sucursal 1
MERGE (e:Empleado {nombre: "Luis Morales",   CURP: "MOLU900101HDFRRR01", telefono: "555-5678", cuentaBancaria: "0987654321", fechaContratacion: "1990-01-01", tipo: "Gerente"}) RETURN e;  // Sucursal 2
MERGE (e:Empleado {nombre: "María López",    CURP: "LOMA890303MDFRTR09", telefono: "555-2345", cuentaBancaria: "5678901234", fechaContratacion: "1989-03-03", tipo: "Gerente"}) RETURN e;  // Sucursal 3
MERGE (e:Empleado {nombre: "Carlos Sánchez", CURP: "SACA910202HDFRLD04", telefono: "555-6789", cuentaBancaria: "4321098765", fechaContratacion: "1991-02-02", tipo: "Gerente"}) RETURN e;  // Sucursal 4
MERGE (e:Empleado {nombre: "Julia Ramírez",  CURP: "RAJU871230MDFRRJ07", telefono: "555-7890", cuentaBancaria: "3210987654", fechaContratacion: "1992-03-03", tipo: "Gerente"}) RETURN e;  // Sucursal 5
MERGE (e:Empleado {nombre: "Super Gerente",  CURP: "SUPERGERENTE123456", telefono: "555-8901", cuentaBancaria: "2109876543", fechaContratacion: "1993-04-04", tipo: "Gerente"}) RETURN e;  // Sucursal 5

## Empleados - Desarrolladores
<!-- Sucursal 1 -->
MERGE (e:Empleado {nombre: "Fernando Hernández", CURP: "HEFE881231HDFRRD02", telefono: "555-3456", cuentaBancaria: "4567890123", fechaContratacion: "1988-12-31", tipo: "Desarrollador", especializacion: "Backend"})    RETURN e;
MERGE (e:Empleado {nombre: "Pedro Torres",       CURP: "TOPE870301HDFRRL08", telefono: "555-5670", cuentaBancaria: "8901234567", fechaContratacion: "1987-03-01", tipo: "Desarrollador", especializacion: "Full-stack"}) RETURN e;
MERGE (e:Empleado {nombre: "Super Empleado",     CURP: "SUPEREMPLEADO12345", telefono: "555-i639", cuentaBancaria: "3947762902", fechaContratacion: "1988-04-02", tipo: "Desarrollador", especializacion: "Full-stack"}) RETURN e;
<!-- Sucursal 2 -->
MERGE (e:Empleado {nombre: "Sara Castillo",      CURP: "CASA900201MDFRRC06", telefono: "555-4567", cuentaBancaria: "6789012345", fechaContratacion: "1990-02-01", tipo: "Desarrollador", especializacion: "Frontend"})   RETURN e;
MERGE (e:Empleado {nombre: "Laura Fernández",    CURP: "FELA920101MDFRRN01", telefono: "555-6781", cuentaBancaria: "5678901234", fechaContratacion: "1992-01-01", tipo: "Desarrollador", especializacion: "Backend"})    RETURN e;
<!-- Sucursal 3 -->
MERGE (e:Empleado {nombre: "Roberto Jiménez",    CURP: "JIRO850102HDFRMS05", telefono: "555-7892", cuentaBancaria: "0987654321", fechaContratacion: "1985-01-02", tipo: "Desarrollador", especializacion: "Frontend"})   RETURN e;
MERGE (e:Empleado {nombre: "Cristina Ruiz",      CURP: "RUCR900303MDFRRT03", telefono: "555-8912", cuentaBancaria: "3456789012", fechaContratacion: "1990-03-03", tipo: "Desarrollador", especializacion: "Full-stack"}) RETURN e;
<!-- Sucursal 4 -->
MERGE (e:Empleado {nombre: "Miguel Vargas",      CURP: "VAMI871231HDFRRN04", telefono: "555-9013", cuentaBancaria: "1230984567", fechaContratacion: "1987-12-31", tipo: "Desarrollador", especializacion: "Backend"})    RETURN e;
MERGE (e:Empleado {nombre: "Patricia Peña",      CURP: "PEPA910102MDFRRR09", telefono: "555-1023", cuentaBancaria: "2109876543", fechaContratacion: "1991-01-02", tipo: "Desarrollador", especializacion: "Frontend"})   RETURN e;
<!-- Sucursal 5 -->
MERGE (e:Empleado {nombre: "Javier Gutiérrez",   CURP: "GUJA890203HDFRRR07", telefono: "555-2034", cuentaBancaria: "3456789123", fechaContratacion: "1989-02-03", tipo: "Desarrollador", especializacion: "Full-stack"}) RETURN e;
MERGE (e:Empleado {nombre: "Sandra Mendoza",     CURP: "MESA921230MDFRRM05", telefono: "555-3045", cuentaBancaria: "6789012345", fechaContratacion: "1992-12-30", tipo: "Desarrollador", especializacion: "Frontend"})   RETURN e;

## Empleados - Soporte Técnico
<!-- Sucursal 1 -->
MERGE (e:Empleado {nombre: "Oscar López",          CURP: "LOOS900303HDFRRR01", telefono: "555-4560", cuentaBancaria: "8901234567", fechaContratacion: "1990-03-03", tipo: "Soporte Técnico", tipoSoporte: "Infraestructura"}) RETURN e;
MERGE (e:Empleado {nombre: "Gabriela Ríos",        CURP: "RIGA920101MDFRRJ02", telefono: "555-5671", cuentaBancaria: "6789012345", fechaContratacion: "1992-01-01", tipo: "Soporte Técnico", tipoSoporte: "Software"})        RETURN e;
<!-- Sucursal 2 -->
MERGE (e:Empleado {nombre: "Francisco Domínguez",  CURP: "DOFR870201HDFRRN04", telefono: "555-6782", cuentaBancaria: "1234567890", fechaContratacion: "1987-02-01", tipo: "Soporte Técnico", tipoSoporte: "Hardware"})        RETURN e;
MERGE (e:Empleado {nombre: "Daniela Silva",        CURP: "SIDA900202MDFRRL08", telefono: "555-7893", cuentaBancaria: "0987654321", fechaContratacion: "1990-02-02", tipo: "Soporte Técnico", tipoSoporte: "Infraestructura"}) RETURN e;
<!-- Sucursal 3 -->
MERGE (e:Empleado {nombre: "Ernesto Cruz",         CURP: "CRER881202HDFRRJ03", telefono: "555-8901", cuentaBancaria: "1230984567", fechaContratacion: "1988-12-02", tipo: "Soporte Técnico", tipoSoporte: "Software"})        RETURN e;
MERGE (e:Empleado {nombre: "Monica García",        CURP: "GAMA920303MDFRRL07", telefono: "555-9014", cuentaBancaria: "2109876543", fechaContratacion: "1992-03-03", tipo: "Soporte Técnico", tipoSoporte: "Infraestructura"}) RETURN e;
<!-- Sucursal 4 -->
MERGE (e:Empleado {nombre: "Alejandro Navarro",    CURP: "NAAL900101HDFRRJ06", telefono: "555-1012", cuentaBancaria: "6789012345", fechaContratacion: "1990-01-01", tipo: "Soporte Técnico", tipoSoporte: "Hardware"})        RETURN e;
MERGE (e:Empleado {nombre: "Verónica Delgado",     CURP: "DEVE911230MDFRRN09", telefono: "555-2035", cuentaBancaria: "3456789012", fechaContratacion: "1991-12-30", tipo: "Soporte Técnico", tipoSoporte: "Software"})        RETURN e;
<!-- Sucursal 5 -->
MERGE (e:Empleado {nombre: "Rodrigo Villanueva",   CURP: "VIRO870102HDFRRN02", telefono: "555-3046", cuentaBancaria: "8901234567", fechaContratacion: "1987-01-02", tipo: "Soporte Técnico", tipoSoporte: "Hardware"})        RETURN e;
MERGE (e:Empleado {nombre: "Isabel Flores",        CURP: "FLIS900202MDFRRL03", telefono: "555-4561", cuentaBancaria: "1234567890", fechaContratacion: "1990-02-02", tipo: "Soporte Técnico", tipoSoporte: "Infraestructura"}) RETURN e;


## Relaciones Sucursales-Empleados
<!-- Sucursal 1 -->
MATCH (s:Sucursal {clave: 'SUC1'}), (e:Empleado {CURP: 'GOMA901202MDFRRN03'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC1'}), (e:Empleado {CURP: 'HEFE881231HDFRRD02'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC1'}), (e:Empleado {CURP: 'TOPE870301HDFRRL08'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC1'}), (e:Empleado {CURP: 'LOOS900303HDFRRR01'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC1'}), (e:Empleado {CURP: 'RIGA920101MDFRRJ02'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;

<!-- Sucursal 2 -->
MATCH (s:Sucursal {clave: 'SUC2'}), (e:Empleado {CURP: 'MOLU900101HDFRRR01'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC2'}), (e:Empleado {CURP: 'CASA900201MDFRRC06'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC2'}), (e:Empleado {CURP: 'FELA920101MDFRRN01'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC2'}), (e:Empleado {CURP: 'DOFR870201HDFRRN04'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC2'}), (e:Empleado {CURP: 'SIDA900202MDFRRL08'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;

<!-- Sucursal 3 -->
MATCH (s:Sucursal {clave: 'SUC3'}), (e:Empleado {CURP: 'LOMA890303MDFRTR09'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC3'}), (e:Empleado {CURP: 'JIRO850102HDFRMS05'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC3'}), (e:Empleado {CURP: 'RUCR900303MDFRRT03'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC3'}), (e:Empleado {CURP: 'CRER881202HDFRRJ03'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC3'}), (e:Empleado {CURP: 'GAMA920303MDFRRL07'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;

<!-- Sucursal 4 -->
MATCH (s:Sucursal {clave: 'SUC4'}), (e:Empleado {CURP: 'SACA910202HDFRLD04'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC4'}), (e:Empleado {CURP: 'VAMI871231HDFRRN04'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC4'}), (e:Empleado {CURP: 'PEPA910102MDFRRR09'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC4'}), (e:Empleado {CURP: 'NAAL900101HDFRRJ06'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC4'}), (e:Empleado {CURP: 'DEVE911230MDFRRN09'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;

<!-- Sucursal 5 -->
MATCH (s:Sucursal {clave: 'SUC5'}), (e:Empleado {CURP: 'RAJU871230MDFRRJ07'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC5'}), (e:Empleado {CURP: 'GUJA890203HDFRRR07'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC5'}), (e:Empleado {CURP: 'MESA921230MDFRRM05'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC5'}), (e:Empleado {CURP: 'VIRO870102HDFRRN02'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;
MATCH (s:Sucursal {clave: 'SUC5'}), (e:Empleado {CURP: 'FLIS900202MDFRRL03'})
MERGE (s)-[:TIENE_EMPLEADO]->(e) RETURN s,e;



## Proyectos
<!-- Proyecto 1 -->
MERGE (p:Proyecto {codigo: 'Proyecto1', nombre: 'Proyecto 1', descripcion: 'Algo algo este es el proyecto 1', fecha_inicio: date('2024-01-01'), fecha_fin: date('2024-08-11'), presupuesto: 50000}) RETURN p;
<!-- Relaciones de proyecto - Gerente 1, Desarrollador 1-1, Soporte 2-1 -->
MATCH (p:Proyecto {codigo: 'Proyecto1'}), (e:Empleado:Gerente {CURP: 'GOMA901202MDFRRN03'})
MERGE (e)-[:GESTIONA]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto1'}), (e:Empleado:Desarrollador {CURP: 'HEFE881231HDFRRD02'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto1'}), (e:Empleado:Soporte {CURP: 'DOFR870201HDFRRN04'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
<!-- Relación Proyecto - Sucursal -->
MATCH (s:Sucursal {clave: 'SUC1'}), (p:Proyecto {codigo: 'Proyecto1'})
MERGE (p)-[:UBICADO_EN]->(s) RETURN s,p;


<!-- Proyecto 2 -->
MERGE (p:Proyecto {codigo: 'Proyecto2', nombre: 'Proyecto 2', descripcion: 'Algo algo este es el proyecto 2', fecha_inicio: date('2024-02-02'), fecha_fin: date('2024-09-12'), presupuesto: 60000}) RETURN p;
<!-- Relaciones de proyecto - Gerente 2, Desarrollador 2-1, Soporte 3-1 -->
MATCH (p:Proyecto {codigo: 'Proyecto2'}), (e:Empleado {CURP: 'MOLU900101HDFRRR01'})
MERGE (e)-[:GESTIONA]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto2'}), (e:Empleado {CURP: 'CASA900201MDFRRC06'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto2'}), (e:Empleado {CURP: 'CRER881202HDFRRJ03'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
<!-- Relación Proyecto - Sucursal -->
MATCH (s:Sucursal {clave: 'SUC2'}), (p:Proyecto {codigo: 'Proyecto2'})
MERGE (p)-[:UBICADO_EN]->(s) RETURN s,p;


<!-- Proyecto 3 -->
MERGE (p:Proyecto {codigo: 'Proyecto3', nombre: 'Proyecto 3', descripcion: 'Algo algo este es el proyecto 3', fecha_inicio: date('2024-03-03'), fecha_fin: date('2024-10-13'), presupuesto: 70000}) RETURN p;
<!-- Relaciones de proyecto - Gerente 3, Desarrollador 3-1, Soporte 4-1 -->
MATCH (p:Proyecto {codigo: 'Proyecto3'}), (e:Empleado {CURP: 'LOMA890303MDFRTR09'})
MERGE (e)-[:GESTIONA]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto3'}), (e:Empleado {CURP: 'JIRO850102HDFRMS05'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto3'}), (e:Empleado {CURP: 'NAAL900101HDFRRJ06'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
<!-- Relación Proyecto - Sucursal -->
MATCH (s:Sucursal {clave: 'SUC3'}), (p:Proyecto {codigo: 'Proyecto3'})
MERGE (p)-[:UBICADO_EN]->(s) RETURN s,p;


<!-- Proyecto 4 -->
MERGE (p:Proyecto {codigo: 'Proyecto4', nombre: 'Proyecto 4', descripcion: 'Algo algo este es el proyecto 4', fecha_inicio: date('2024-04-04'), fecha_fin: date('2024-11-14'), presupuesto: 80000}) RETURN p;
<!-- Relaciones de proyecto - Gerente 4, Desarrollador 4-1, Soporte 5-1 -->
MATCH (p:Proyecto {codigo: 'Proyecto4'}), (e:Empleado {CURP: 'SACA910202HDFRLD04'})
MERGE (e)-[:GESTIONA]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto4'}), (e:Empleado {CURP: 'VAMI871231HDFRRN04'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto4'}), (e:Empleado {CURP: 'VIRO870102HDFRRN02'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
<!-- Relación Proyecto - Sucursal -->
MATCH (s:Sucursal {clave: 'SUC4'}), (p:Proyecto {codigo: 'Proyecto4'})
MERGE (p)-[:UBICADO_EN]->(s) RETURN s,p;


<!-- Proyecto 5 -->
MERGE (p:Proyecto {codigo: 'Proyecto5', nombre: 'Proyecto 5', descripcion: 'Algo algo este es el proyecto 5', fecha_inicio: date('2024-05-05'), fecha_fin: date('2024-12-15'), presupuesto: 90000}) RETURN p;
<!-- Relaciones de proyecto - Gerente 5, Desarrollador 5-1, Soporte 1-1 -->
MATCH (p:Proyecto {codigo: 'Proyecto5'}), (e:Empleado {CURP: 'RAJU871230MDFRRJ07'})
MERGE (e)-[:GESTIONA]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto5'}), (e:Empleado {CURP: 'GUJA890203HDFRRR07'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
MATCH (p:Proyecto {codigo: 'Proyecto5'}), (e:Empleado {CURP: 'LOOS900303HDFRRR01'})
MERGE (e)-[:TRABAJA_EN]->(p) RETURN p,e;
<!-- Relación Proyecto - Sucursal -->
MATCH (s:Sucursal {clave: 'SUC5'}), (p:Proyecto {codigo: 'Proyecto5'})
MERGE (p)-[:UBICADO_EN]->(s) RETURN s,p;


## Clientes
MERGE (c:Cliente {nombre: 'Acme Corp',           empresa: 'Acme Corp',           telefono: '5598765432', correo: 'contacto@acmecorp.com'})         RETURN c;
MERGE (c:Cliente {nombre: 'Global Solutions',    empresa: 'Global Solutions',    telefono: '5587654321', correo: 'info@globalsolutions.com'})      RETURN c;
MERGE (c:Cliente {nombre: 'Innovatech',          empresa: 'Innovatech',          telefono: '5576543210', correo: 'contacto@innovatech.com'})       RETURN c;
MERGE (c:Cliente {nombre: 'NextGen Industries',  empresa: 'NextGen Industries',  telefono: '5565432109', correo: 'support@nextgenindustries.com'}) RETURN c;
MERGE (c:Cliente {nombre: 'Prime Services',      empresa: 'Prime Services',      telefono: '5554321098', correo: 'hello@primeservices.com'})       RETURN c;
MERGE (c:Cliente {nombre: 'El que no visita',    empresa: 'No visita',           telefono: '5543210987', correo: 'novisita@nunca.com'})            RETURN c;


## Relaciones Cliente-Proyecto
<!-- Cliente 1 - Proyecto 1 -->
MATCH (c:Cliente {nombre: 'Acme Corp'}), (p:Proyecto {codigo: 'Proyecto1'})
MERGE (c)-[:CONTRATA]->(p) RETURN c,p;

<!-- Cliente 2 - Proyecto 2 -->
MATCH (c:Cliente {nombre: 'Global Solutions'}), (p:Proyecto {codigo: 'Proyecto2'})
MERGE (c)-[:CONTRATA]->(p) RETURN c,p;

<!-- Cliente 3 - Proyecto 3 -->
MATCH (c:Cliente {nombre: 'Innovatech'}), (p:Proyecto {codigo: 'Proyecto3'})
MERGE (c)-[:CONTRATA]->(p) RETURN c,p;

<!-- Cliente 4 - Proyecto 4 -->
MATCH (c:Cliente {nombre: 'NextGen Industries'}), (p:Proyecto {codigo: 'Proyecto4'})
MERGE (c)-[:CONTRATA]->(p) RETURN c,p;

<!-- Cliente 5 - Proyecto 5 -->
MATCH (c:Cliente {nombre: 'Prime Services'}), (p:Proyecto {codigo: 'Proyecto5'})
MERGE (c)-[:CONTRATA]->(p) RETURN c,p;



## Reuniones Sucursal - Cliente
<!-- Reunion Sucursal 1 - Cliente 1 - Proyecto 1 -->
MERGE (r:Reunion {fecha: date('2024-02-10'), hora: time('12:00'), motivo: 'Reunion para Proyecto 1'}) WITH r
MATCH (c:Cliente {nombre: 'Acme Corp'})
MATCH (s:Sucursal {clave: 'SUC1'})
MATCH (e1:Empleado {CURP: 'GOMA901202MDFRRN03'})
MATCH (e2:Empleado {CURP: 'HEFE881231HDFRRD02'})
MATCH (e3:Empleado {CURP: 'DOFR870201HDFRRN04'})
MERGE (r)-[r:REUNION_EN]->(s)
MERGE (c)-[a:ASISTENCIA]->(r)
MERGE (e1)-[a1:ASISTENCIA]->(r)
MERGE (e2)-[a2:ASISTENCIA]->(r)
MERGE (e3)-[a3:ASISTENCIA]->(r)
RETURN s,r,rn,c,e1,e2,e3,a,a1,a2,a3;

<!-- Reunion Sucursal 2 - Cliente 2 - Proyecto 2 -->
MERGE (r:Reunion {fecha: date('2024-03-11'), hora: time('13:00'), motivo: 'Reunion para Proyecto 2'}) WITH r
MATCH (c:Cliente {nombre: 'Global Solutions'})
MATCH (s:Sucursal {clave: 'SUC2'})
MATCH (e1:Empleado {CURP: 'MOLU900101HDFRRR01'})
MATCH (e2:Empleado {CURP: 'CASA900201MDFRRC06'})
MATCH (e3:Empleado {CURP: 'CRER881202HDFRRJ03'})
MERGE (r)-[rn:REUNION_EN]->(s)
MERGE (c)-[a:ASISTENCIA]->(r)
MERGE (e1)-[a1:ASISTENCIA]->(r)
MERGE (e2)-[a2:ASISTENCIA]->(r)
MERGE (e3)-[a3:ASISTENCIA]->(r)
RETURN s,r,rn,c,e1,e2,e3,a,a1,a2,a3;

<!-- Reunion Sucursal 3 - Cliente 3 - Proyecto 3 -->
MERGE (r:Reunion {fecha: date('2024-04-12'), hora: time('14:00'), motivo: 'Reunion para Proyecto 3'}) WITH r
MATCH (c:Cliente {nombre: 'Innovatech'})
MATCH (s:Sucursal {clave: 'SUC3'})
MATCH (e1:Empleado {CURP: 'LOMA890303MDFRTR09'})
MATCH (e2:Empleado {CURP: 'JIRO850102HDFRMS05'})
MATCH (e3:Empleado {CURP: 'NAAL900101HDFRRJ06'})
MERGE (r)-[rn:REUNION_EN]->(s)
MERGE (c)-[a:ASISTENCIA]->(r)
MERGE (e1)-[a1:ASISTENCIA]->(r)
MERGE (e2)-[a2:ASISTENCIA]->(r)
MERGE (e3)-[a3:ASISTENCIA]->(r)
RETURN s,r,rn,c,e1,e2,e3,a,a1,a2,a3;

<!-- Reunion Sucursal 4 - Cliente 4 - Proyecto 4 -->
MERGE (r:Reunion {fecha: date('2024-05-13'), hora: time('15:00'), motivo: 'Reunion para Proyecto 4'}) WITH r
MATCH (c:Cliente {nombre: 'NextGen Industries'})
MATCH (s:Sucursal {clave: 'SUC4'})
MATCH (e1:Empleado {CURP: 'SACA910202HDFRLD04'})
MATCH (e2:Empleado {CURP: 'VAMI871231HDFRRN04'})
MATCH (e3:Empleado {CURP: 'VIRO870102HDFRRN02'})
MERGE (r)-[rn:REUNION_EN]->(s)
MERGE (c)-[a:ASISTENCIA]->(r)
MERGE (e1)-[a1:ASISTENCIA]->(r)
MERGE (e2)-[a2:ASISTENCIA]->(r)
MERGE (e3)-[a3:ASISTENCIA]->(r)
RETURN s,r,rn,c,e1,e2,e3,a,a1,a2,a3;

<!-- Reunion Sucursal 5 - Cliente 5 - Proyecto 5 -->
MERGE (r:Reunion {fecha: date('2024-06-14'), hora: time('16:00'), motivo: 'Reunion para Proyecto 5'}) WITH r
MATCH (c:Cliente {nombre: 'Prime Services'})
MATCH (s:Sucursal {clave: 'SUC5'})
MATCH (e1:Empleado {CURP: 'RAJU871230MDFRRJ07'})
MATCH (e2:Empleado {CURP: 'GUJA890203HDFRRR07'})
MATCH (e3:Empleado {CURP: 'LOOS900303HDFRRR01'})
MERGE (r)-[rn:REUNION_EN]->(s)
MERGE (c)-[a:ASISTENCIA]->(r)
MERGE (e1)-[a1:ASISTENCIA]->(r)
MERGE (e2)-[a2:ASISTENCIA]->(r)
MERGE (e3)-[a3:ASISTENCIA]->(r)
RETURN s,r,rn,c,e1,e2,e3,a,a1,a2,a3;


## Visitas
MERGE (v:Visita {fecha: date('2024-03-15'), hora: time('12:00'), motivo: 'Revisión de proyecto 1'}) WITH v
MATCH (s:Sucursal {clave: 'SUC1'})
MATCH (c:Cliente {nombre: 'Acme Corp'})
MERGE (s)-[vi:VISITA]->(v)
MERGE (v)-[r:REALIZADA_POR]->(c)
RETURN s, vi, v, r, c;

MERGE (v:Visita {fecha: date('2024-04-16'), hora: time('13:00'), motivo: 'Revisión de proyecto 2'}) WITH v
MATCH (s:Sucursal {clave: 'SUC2'})
MATCH (c:Cliente {nombre: 'Global Solutions'})
MERGE (s)-[vi:VISITA]->(v)
MERGE (v)-[r:REALIZADA_POR]->(c)
RETURN s, vi, v, r, c;

MERGE (v:Visita {fecha: date('2024-05-17'), hora: time('14:00'), motivo: 'Revisión de proyecto 3'}) WITH v
MATCH (s:Sucursal {clave: 'SUC3'})
MATCH (c:Cliente {nombre: 'Innovatech'})
MERGE (s)-[vi:VISITA]->(v)
MERGE (v)-[r:REALIZADA_POR]->(c)
RETURN s, vi, v, r, c;

MERGE (v:Visita {fecha: date('2024-06-18'), hora: time('15:00'), motivo: 'Revisión de proyecto 4'}) WITH v
MATCH (s:Sucursal {clave: 'SUC4'})
MATCH (c:Cliente {nombre: 'NextGen Industries'})
MERGE (s)-[vi:VISITA]->(v)
MERGE (v)-[r:REALIZADA_POR]->(c)
RETURN s, vi, v, r, c;

MERGE (v:Visita {fecha: date('2024-07-19'), hora: time('16:00'), motivo: 'Revisión de proyecto 5'}) WITH v
MATCH (s:Sucursal {clave: 'SUC5'})
MATCH (c:Cliente {nombre: 'Prime Services'})
MERGE (s)-[vi:VISITA]->(v)
MERGE (v)-[r:REALIZADA_POR]->(c)
RETURN s, vi, v, r, c;


# Querys de Escenario
## Q00. Script del escenario de datos.
datos.txt

## Q01. Obtener la lista de sucursales que tienen más de 5 empleados.
```
MATCH (s:Sucursal)-[:TIENE_EMPLEADO]->(e:Empleado) WITH s,
COUNT(e) AS numEmpleados
WHERE numEmpleados > 5
RETURN s.nombre;
```

## Q02. Encontrar los gerentes que gestionan más de 3 proyectos simultáneamente.
```
MATCH (e:Empleado)-[:GESTIONA]->(p:Proyecto)
WITH e, COUNT(p) AS numProyectos
WHERE numProyectos > 3
RETURN e;
```

## Q03. Obtener la lista de desarrolladores con especialización en back-end que están trabajando en más de 2 proyectos.
```
MATCH (e:Empleado {especializacion: 'Backend'})-[:TRABAJA_EN]->(p:Proyecto)
WITH e, COUNT(p) AS numProyectos
WHERE numProyectos > 2
RETURN e.nombre;
```

## Q04. Obtener la lista de proyectos que tienen un presupuesto mayor a $1,000,000.
```
MATCH (p:Proyecto)
WHERE p.presupuesto > 1000000
RETURN p.nombre;
```

## Q05. Listar los empleados de soporte técnico de todas las sucursales
```
MATCH (e:Empleado) WHERE e.tipo = 'Soporte Técnico' RETURN e.nombre;
```

## Q06. Encontrar los proyectos que corresponden a un cliente en específico.
```
MATCH (c:Cliente {nombre: 'Acme Corp'})-[:CONTRATA]->(p:Proyecto)
RETURN c.nombre AS Cliente, p.nombre AS Proyecto
```

## Q07. Obtener la lista de sucursales que han recibido visitas de más de 5 clientes diferentes.
```
MATCH (s:Sucursal)-[:VISITA]->(v:Visita)
MATCH (v)-[:REALIZADA_POR]->(c:Cliente)
WITH s, COUNT(DISTINCT c) AS numClientes
WHERE numClientes > 5
RETURN s.nombre AS Sucursal, numClientes;
```

## Q08. Encontrar a los desarrolladores que han trabajado en proyectos con un presupuesto total mayor a $500,000.
```
MATCH (Desarrollador)-[:TRABAJA_EN]->(p:Proyecto)
WITH Desarrollador, SUM(p.presupuesto) AS totalPresupuesto
WHERE totalPresupuesto > 500000
RETURN Desarrollador.nombre, totalPresupuesto
```

## Q09. Obtener la lista de clientes que han contratado más de 3 proyectos en diferentes sucursales.
```
MATCH (c:Cliente)-[:CONTRATA]->(p:Proyecto)-[:UBICADO_EN]->(s:Sucursal)
WITH c, COUNT(DISTINCT s) AS numSucursales
WHERE numSucursales > 3
RETURN c.nombre 
AS Cliente, numSucursales
```

## Q10. Encontrar las sucursales que tienen más de 5 desarrolladores especializados en full-stack.
```
MATCH (e:Empleado {especializacion: "Full-stack"})<-[:TIENE_EMPLEADO]-(s:Sucursal) WITH s,
COUNT(s) as Cantidad
WHERE Cantidad > 5 
RETURN s.nombre;
```

## Q11. Transferir todos los empleados de soporte técnico de una sucursal en específico hacia otra sucursal.
```
MATCH (s1:Sucursal {clave: 'SUC1'})-[r:TIENE_EMPLEADO]->(e:Empleado {tipo: 'Soporte Técnico'}), 
(s2:Sucursal {clave: 'SUC2'})
MERGE (s2)-[:TIENE_EMPLEADO]->(e)
DELETE r;
```

## Q12. Reemplaza al gerente de una sucursal en específico.
```
MATCH (s:Sucursal {clave: 'SUC1'})-[te:TIENE_EMPLEADO]->(e:Empleado {tipo: 'Gerente'})
DELETE te
WITH s
MATCH (ng:Empleado {CURP: 'TOPE870301HDFRRL08'})
MERGE (s)-[:TIENE_EMPLEADO]->(ng)
```

## Q13. Cambie un proyecto en específico a otra sucursal, incluyendo la totalidad de participantes en el proyecto.
```
MATCH (p:Proyecto)-[ubi:UBICADO_EN]->(s1:Sucursal {clave: 'SUC1'})
MATCH (s2:Sucursal {clave: 'SUC2'})
MERGE (p)-[:UBICADO_EN]->(s2)
DELETE ubi;
```

## Q14. Obtener la lista de clientes que nunca han realizado visitas a las sucursales.
```
MATCH (c:Cliente)
WHERE NOT (c)<-[:REALIZADA_POR]-(:Visita)
RETURN c.nombre AS Cliente
```

## Q15. Todos los empleados de una sucursal determinada son transferidos a otra sucursal por cierre de sucursal de origen. 
```
MATCH (s1:Sucursal {clave: 'SUC1'})-[te:TIENE_EMPLEADO]->(e:Empleado),
(s2:Sucursal {clave: 'SUC2'})
MERGE (s2)-[:TIENE_EMPLEADO]->(e)
DELETE te;
DETACH DELETE s1;
```

# Endpoints
## Consultas
**1.- Obtener la lista de sucursales que tienen más de 5 empleados.**
    http://localhost:3000/api/sucursales/muchosempleados

**2.- Obtener la lista de proyectos que tienen un presupuesto mayor a $1,000,000.**
    http://localhost:3000/api/proyectos/presupuestoalto

**3.- Listar los empleados de soporte técnico de todas las sucursales**
    http://localhost:3000/api/empleados/empleadossoporte

**4.- Encontrar las sucursales que tienen más de 5 desarrolladores especializados en full-stack.**
    http://localhost:3000/api/sucursales/muchostack

**5.- Obtener la lista de clientes que nunca han realizado visitas a las sucursales.**
    http://localhost:3000/api/clientes/sinvisitas

**6.- Encontrar los gerentes que gestionan más de 3 proyectos simultáneamente.**
    http://localhost:3000/api/gerentes/proyectos

**7.- Obtener la lista de desarrolladores con especialización en back-end que están trabajando en más de 2 proyectos.**
    http://localhost:3000/api/desarrolladores/backend

**9.- Encontrar a los desarrolladores que han trabajado en proyectos con un presupuesto total mayor a $500,000.**
    http://localhost:3000/api/desarrolladores/presupuesto


## Modificaciones
**1.- Transferir todos los empleados de soporte técnico de una sucursal en específico hacia otra sucursal.**
    http://localhost:3000/api/transferirsoporte

**2.- Crea un proyecto**
    http://localhost:3000/api/proyectos/crear

**3.- Todos los empleados de una sucursal determinada son transferidos a otra sucursal por cierre de sucursal de origen.**
    http://localhost:3000/api/transferirsucursal

**4.- Cambie un proyecto en específico a otra sucursal, incluyendo la totalidad de participantes en el proyecto.**
    http://localhost:3000/api/transferirproyecto

**5.- Registrar la visita de un cliente**
    http://localhost:3000/api/visitas/registrar

**6.- Registrar una reunión con un cliente y los empleados asistentes**
    http://localhost:3000/api/reuniones/registrar
    

# Codigo Backend

## Estructura de archivos
/node_modules  
/.dockerignore  
/.gitignore  
/docker-compose.yml  
/dockerfile  
/src  
    /server.js  
    /controlador  
        /controladorClientes.js  
        /controladorEmpleados.js  
        /controladorSucursales.js  
    /modelo  
        /modeloClientes.js  
        /modeloEmpleados.js  
        /modeloSucursales.js  
    /rutas  
        /rutasClientes.js  
        /rutasEmpleados.js  
        /rutasSucursales.js  
        /cache.js  
        /logger.js  
    
## docker-compose.yml
```
services:

  neo4j:
    image: neo4j
    container_name: neo4j_Ges
    ports:
      - "7474:7474"
      - "7687:7687"
    environment:
      - NEO4J_AUTH=none
    networks:
      - backend

  redis_stack:
    image: redis/redis-stack
    container_name: redis_stack
    ports:
      - "6379:6379"
      - "8001:8001"
    depends_on:
      - neo4j
    networks:
      - backend

  app:
    image: edjovilellaca/proyectote-app
    container_name: proyectote-app
    ports:
      - "3000:3000"
    depends_on:
      - neo4j
      - redis_stack
    environment:
      - NEO4J_URL=neo4j://neo4j_Ges:7687
    volumes:
      - ./Proyectote2:/app
    networks:
      - backend
    command: npm start

networks:
  backend:
    driver: bridge
```

## dockerfile
```
FROM node
WORKDIR /Proyectote2
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]
```

## server.js
```
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
```

## Controlador
###  controladorClientes.js
```
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
```

### controladorEmpleados.js
```
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
```

### controladorSucursales.js
```
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
```

## Modelo
### modeloClientes.js
```
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
```

### modeloEmpleados.js
```
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
```

### modeloSucursales.js
```
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
```

## Rutas
### rutasClientes.js
```
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
```

### rutasEmpleados.js
```
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
```

### rutasSucursales.js
```
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
```

### cache.js
```
const redis = require('redis');
const client = redis.createClient({
    socket:{
        port:6379,
        host:'127.0.0.1'
    }
});

const cache = async function (req, res, next) {
    let fecha = new Date();
    await client.connect();
    await client.set(fecha.toLocaleDateString() + ":" + fecha.getHours() + "-" +
    fecha.getMinutes() + "-" + fecha.getSeconds(), " - " + req.method + " " +
    req.route.path);
    await client.disconnect();
    next()
}
module.exports = cache;
```

### logger.js
```
const redis = require('redis');
const client = redis.createClient({
    socket:{
        port:6379,
        host:'redis_stack'
    }
});

// Exportar una función middleware que se ejecutará en cada solicitud
module.exports = (req, res, next) => {
    res.on('finish', async () => {
        await client.connect();
        const key = `${req.method}:${Date.now()}:${req.originalUrl}`;
        const valor = JSON.stringify({
            clave: key,
            time: new Date(),
            req: {
                method: req.method,
                url: req.originalUrl,
                headers: req.headers,
                body: req.body
            },
            res: {
                statusCode: res.statusCode,
                statusMessage: res.statusMessage,
                response: req.method === 'GET' ? res.data : null
            }
        });
        console.log(valor)
        await client.set(key, valor);
        await client.disconnect();
    });
    next();
};
```
