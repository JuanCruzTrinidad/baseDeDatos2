import { disconnect, getDatabase, insert } from "./configdb";

async function run() {
  const database = await getDatabase();
  let venta = database.collection("venta");

 // await reporte1(venta);
 // await reporte2(venta);
 // await reporte3(venta);
 // await reporte4(venta);
 // await reporte5(venta);
 // await reporte6(venta);
 // await reporte7(venta);
 await reporte8(venta);

// const data = await database.collection('obra-social').find({}).toArray();
// console.log(data, {depth: null});
}

run().then(() => disconnect().then(() => console.dir("Se finalizo la conexión.")))

const reporte1 = async (venta: any) => {
    let and = [
    { fecha: {$gt: new Date('01/01/2021')} },
    { fecha: {$lte: new Date('01/01/2023')} },
  ];

  let ventaCount = await venta.count({ $and: and });

  let sucursales = venta.aggregate([
                      { $match: { $and: and } },
                     { $group: { _id: "$empleadoCaja.sucursal.nombre", totalVentas: { $count: {} } } },
                     { $sort: { totalVentas: -1 } }
                   ]);

  let sucursalesArray = [];
  
  while (await sucursales.hasNext()) {
     sucursalesArray.push(await sucursales.next());
  }

  const reporte1 = { "Total Ventas": ventaCount, "Ventas Por Sucursal": sucursalesArray};
  console.log("Reporte 1")
  console.log(reporte1);
}

const reporte2 = async (venta: any) => {
  let and = [
    { fecha: {$gt: new Date('01/01/2021')} },
    { fecha: {$lte: new Date('01/01/2023')} },
  ];
  
  let ventaPorObraSocial = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: "$cliente.obraSocial.id", nombreObraSocial: { $first: "$cliente.obraSocial.nombre" }, total: { $count: {} }  } },
    { $sort: { total: -1 } }
  ]);

  let ventaPorObraSocialArray: any[]= [];
  
  while (await ventaPorObraSocial.hasNext()) {
    let venta = await ventaPorObraSocial.next();
    if(venta?._id === null) {
      venta.nombreObraSocial = "Privado"
    }
    ventaPorObraSocialArray.push(venta);
  }
  
  console.log(ventaPorObraSocialArray);
}

const reporte3 = async (venta: any) => {
  let and = [
    { fecha: {$gt: new Date('01/01/2021')} },
    { fecha: {$lte: new Date('01/01/2023')} },
  ];

  let totalVentas = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: null, sum: { $sum: "$total" }  } }
  ]);
  
    let total = (await totalVentas.next())?.sum;

   let totalPorSucursal = venta.aggregate([
                      { $match: { $and: and } },
                     { $group: { _id: "$empleadoCaja.sucursal.nombre", totalVentas$: { $sum: "$total" } } },
                     { $sort: { totalVentas: -1 } }
                   ]);

    let totalPorSucursalArray = [];
  
  while (await totalPorSucursal.hasNext()) {
     totalPorSucursalArray.push(await totalPorSucursal.next());
  }

  const reporte3 = {"Total Ventas $": total, "Sucursales": totalPorSucursalArray}
  console.log(reporte3)
}

const reporte4 = async (venta: any) => {
   let and = [
    { fecha: {$gt: new Date('01/01/2021')} },
    { fecha: {$lte: new Date('01/01/2023')} },
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

  let ventasPorTipoArray = [];
  
  while (await ventasPorTipo.hasNext()) {
     ventasPorTipoArray.push(await ventasPorTipo.next());
  }
  console.log("Reporte 4")
  console.log(ventasPorTipoArray)
}

const reporte5 = async (venta: any) => {
  let rankingMontoPorProductoSucursal = venta.aggregate([
  {$unwind: "$productos"}, //Desarma el array, hace un reduce en js.
  { $group: { 
    _id:  { 
      producto: "$productos.descripcion", 
      sucursal: "$empleadoCaja.sucursal.nombre",
    },
    totalVentas: { $sum: "$total" } } 
  },
  { $sort: { totalVentas: -1 } }
  ]);

  let data = [];
  
  while (await rankingMontoPorProductoSucursal.hasNext()) {
     data.push(await rankingMontoPorProductoSucursal.next());
  }
  console.log("Reporte 5")
  console.log(data)
}

const reporte6 = async (venta:any) => {
   let rankingCantidadPorProductoSucursal = venta.aggregate([
  {$unwind: "$productos"}, //Desarma el array, hace un reduce en js.
  { $group: { 
    _id:  { 
      producto: "$productos.descripcion", 
      sucursal: "$empleadoCaja.sucursal.nombre",
    },
    totalVentas: { $count: {} } } 
  },
  { $sort: { totalVentas: -1 } }
  ]);

  let data = [];
  
  while (await rankingCantidadPorProductoSucursal.hasNext()) {
     data.push(await rankingCantidadPorProductoSucursal.next());
  }
  console.log("Reporte 6")
  console.log(data)
}

const reporte7 = async (venta:any) => {
  let rankingCantidadClientes = venta.aggregate([
  { $group: { 
    _id:  {
      clienteDni: "$cliente.dni",
      clienteNombre: "$cliente.nombre",
      clienteApellido: "$cliente.apellido"
    },
    totalVentas: { $count: {} } } 
  },
  { $sort: { totalVentas: -1 } }
  ]);

  let data = [];
  
  while (await rankingCantidadClientes.hasNext()) {
     data.push(await rankingCantidadClientes.next());
  }
  console.log("Reporte 7")
  console.log(data)
}

const reporte8 = async (venta:any) => {
  let rankingCantidadClientes = venta.aggregate([
  { $group: { 
    _id: { 
      clienteDni: "$cliente.dni",
      sucursal: "$empleadoCaja.sucursal.nombre"
    },
    totalVentas: { $count: {} } } 
  },
  { $sort: { totalVentas: -1 } }
  ]);

  let data = [];
  
  while (await rankingCantidadClientes.hasNext()) {
     data.push(await rankingCantidadClientes.next());
  }
  console.log("Reporte 8")
  console.log(data)
}