import { disconnect, getDatabase } from "./configdb";

async function run() {
  const database = await getDatabase();
  let venta = database.collection("venta");

  const fechaDesde: Date = new Date('01/01/2021');
  const fechaHasta: Date = new Date('01/01/2023');

  await reporte1(venta, fechaDesde, fechaHasta);
  await reporte2(venta, fechaDesde, fechaHasta);
  await reporte3(venta, fechaDesde, fechaHasta);
  await reporte4(venta, fechaDesde, fechaHasta);
  await reporte5(venta);
  await reporte6(venta);
  await reporte7(venta);
  await reporte8(venta);
}

run().then(() => disconnect().then(() => console.dir("Se finalizo la conexión.")));

/*
1. Un reporte con dos resultados, por un lado el total de la cantidad de ventas de toda la
cadena completa (todas las sucursales) y por otro lado las cantidades de ventas agrupadas por
sucursales. Todo esto debe ocurrir entre dos fechas pasadas como parámetros (fecha desde y
fecha hasta). 
*/
const reporte1 = async (venta: any, fechaDesde: Date, fechaHasta: Date) => {
  let and = [
    { fecha: {$gt: fechaDesde} },
    { fecha: {$lte: fechaHasta} },
  ];

  let ventaCount = await venta.count({ $and: and });

  let sucursalesArray: any[] = [];

  let sucursales = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: "$empleadoCaja.sucursal.nombre", totalVentas: { $count: {} } } },
    { $sort: { totalVentas: -1 } }
  ]);
  
  while (await sucursales.hasNext()) {
     sucursalesArray.push(await sucursales.next());
  }

  const reporte1 = { "Total Ventas": ventaCount, "Ventas Por Sucursal": sucursalesArray};
  console.log("------------------------- Reporte 1 -------------------------");
  console.log(reporte1);
}

/*
2. Un reporte con las cantidades de ventas agrupadas por obras sociales y además considerar
los privados (sin obra social) como un grupo mas. Todo esto debe ocurrir entre dos fechas
pasadas como parámetros (fecha desde y fecha hasta).
*/
const reporte2 = async (venta: any, fechaDesde: Date, fechaHasta: Date) => {
  let and = [
    { fecha: {$gt: fechaDesde} },
    { fecha: {$lte: fechaHasta} },
  ];

  let ventaPorObraSocialArray: any[] = [];
  
  let ventaPorObraSocial = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: "$cliente.obraSocial.id", nombreObraSocial: { $first: "$cliente.obraSocial.nombre" }, total: { $count: {} } } },
    { $sort: { total: -1 } }
  ]);

  while (await ventaPorObraSocial.hasNext()) {
    let venta = await ventaPorObraSocial.next();
    if(venta?._id === null) {
      venta.nombreObraSocial = "Privado"
    }
    ventaPorObraSocialArray.push(venta);
  }

  console.log("------------------------- Reporte 2 -------------------------");
  console.log(ventaPorObraSocialArray);
}

/*
3. Un reporte con dos resultados, por un lado el total de la cobranza de toda la cadena
completa (todas las sucursales) y por otro lado la cobranza agrupada por sucursales. Todo esto
debe ocurrir entre dos fechas pasadas como parámetros (fecha desde y fecha hasta). 
*/
const reporte3 = async (venta: any, fechaDesde: Date, fechaHasta: Date) => {
  let and = [
    { fecha: {$gt: fechaDesde} },
    { fecha: {$lte: fechaHasta} },
  ];

  let totalVentas = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: null, sum: { $sum: "$total" }  } }
  ]);
  
  let total = (await totalVentas.next())?.sum;

  let totalPorSucursalArray: any[] = [];

  let totalPorSucursal = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: "$empleadoCaja.sucursal.nombre", totalVentas$: { $sum: "$total" } } },
    { $sort: { totalVentas: -1 } }
  ]);

  while (await totalPorSucursal.hasNext()) {
     totalPorSucursalArray.push(await totalPorSucursal.next());
  }

  const reporte3 = {"Total Ventas $": total, "Sucursales": totalPorSucursalArray};
  console.log("------------------------- Reporte 3 -------------------------");
  console.log(reporte3);
}

/*
4. Un reporte con las cantidades de ventas agrupadas por tipo de producto (farmacia /
perfumería). Todo esto debe ocurrir entre dos fechas pasadas como parámetros (fecha desde y
fecha hasta) 
*/
const reporte4 = async (venta: any, fechaDesde: Date, fechaHasta: Date) => {
  let and = [
    { fecha: {$gt: fechaDesde} },
    { fecha: {$lte: fechaHasta} },
  ];

  let ventasPorTipo = venta.aggregate([
    { $match: { $and: and } },
    {$unwind: "$productos"}, //Desarma el array, hace un reduce en js.
    { $group: { 
      _id: "$productos.tipo", 
      totalVentas: { $count: {} } } 
    },
    { $sort: { totalVentas: -1 } }
  ]);

  let ventasPorTipoArray: any[] = [];
  
  while (await ventasPorTipo.hasNext()) {
     ventasPorTipoArray.push(await ventasPorTipo.next());
  }
  
  console.log("------------------------- Reporte 4 -------------------------");
  console.log(ventasPorTipoArray)
}

/*
5. Ranking de monto vendido, agrupado por producto y por sucursal. 
*/
const reporte5 = async (venta: any) => {
  let rankingMontoPorProductoSucursal = venta.aggregate([
    {$unwind: "$productos"}, //Desarma el array, hace un reduce en js.
    {
      $group: { 
        _id:  { 
          producto: "$productos.descripcion", 
          sucursal: "$empleadoCaja.sucursal.nombre",
        },
        totalVentas: { $sum: "$total" }
      } 
    },
    { $sort: { totalVentas: -1 } }
  ]);

  let data: any[] = [];
  
  while (await rankingMontoPorProductoSucursal.hasNext()) {
     data.push(await rankingMontoPorProductoSucursal.next());
  }
  
  console.log("------------------------- Reporte 5 -------------------------");
  console.log(data)
}

/*
6. Ranking de cantidad de productos vendidos, agrupado por producto y por sucursal. 
*/
const reporte6 = async (venta: any) => {
  let rankingCantidadPorProductoSucursal = venta.aggregate([
    {$unwind: "$productos"}, //Desarma el array, hace un reduce en js.
    {
      $group: { 
        _id:  { 
          producto: "$productos.descripcion", 
          sucursal: "$empleadoCaja.sucursal.nombre",
        },
        totalVentas: { $count: {} }
      } 
    },
    { $sort: { totalVentas: -1 } }
  ]);

  let data: any[] = [];
  
  while (await rankingCantidadPorProductoSucursal.hasNext()) {
     data.push(await rankingCantidadPorProductoSucursal.next());
  }
  
  console.log("------------------------- Reporte 6 -------------------------");
  console.log(data)
}

/*
7. Ranking compras agrupadas por cliente para el total de la cadena. (quiero ver los clientes
que mas compraron en toda la cadena, pudieron comprar en mas de una sucursal) 
*/
const reporte7 = async (venta: any) => {
  let rankingCantidadClientes = venta.aggregate([
    {
      $group: { 
        _id:  {
          clienteDni: "$cliente.dni",
          clienteNombre: "$cliente.nombre",
          clienteApellido: "$cliente.apellido"
        },
        totalVentas: { $count: {} }
      } 
    },
    { $sort: { totalVentas: -1 } }
  ]);

  let data: any[] = [];
  
  while (await rankingCantidadClientes.hasNext()) {
     data.push(await rankingCantidadClientes.next());
  }
  
  console.log("------------------------- Reporte 7 -------------------------");
  console.log(data);
}

/*
8. Ranking compras agrupadas por cliente y por sucursal. (quiero ver como compraron los
clientes intra-sucursal).
*/
const reporte8 = async (venta: any) => {
  let rankingCantidadClientes = venta.aggregate([
    {
      $group: { 
        _id: { 
          clienteDni: "$cliente.dni",
          clienteNombre: "$cliente.nombre",
          clienteApellido: "$cliente.apellido",
          sucursal: "$empleadoCaja.sucursal.nombre"
        },
        totalVentas: { $count: {} }
      } 
    },
    { $sort: { totalVentas: -1 } }
  ]);

  let data: any[] = [];
  
  while (await rankingCantidadClientes.hasNext()) {
     data.push(await rankingCantidadClientes.next());
  }
  
  console.log("------------------------- Reporte 8 -------------------------");
  console.log(data);
}