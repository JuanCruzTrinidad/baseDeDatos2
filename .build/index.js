var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_configdb = __toModule(require("./configdb"));
async function run() {
  const database = await (0, import_configdb.getDatabase)();
  let venta = database.collection("venta");
  const fechaDesde = new Date("01/01/2021");
  const fechaHasta = new Date("01/01/2023");
  await reporte1(venta, fechaDesde, fechaHasta);
  await reporte2(venta, fechaDesde, fechaHasta);
  await reporte3(venta, fechaDesde, fechaHasta);
  await reporte4(venta, fechaDesde, fechaHasta);
  await reporte5(venta);
  await reporte6(venta);
  await reporte7(venta);
  await reporte8(venta);
}
run().then(() => (0, import_configdb.disconnect)().then(() => console.dir("Se finalizo la conexi\xF3n.")));
const reporte1 = async (venta, fechaDesde, fechaHasta) => {
  let and = [
    { fecha: { $gt: fechaDesde } },
    { fecha: { $lte: fechaHasta } }
  ];
  let ventaCount = await venta.count({ $and: and });
  let sucursalesArray = [];
  let sucursales = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: "$empleadoCaja.sucursal.nombre", totalVentas: { $count: {} } } },
    { $sort: { totalVentas: -1 } }
  ]);
  while (await sucursales.hasNext()) {
    sucursalesArray.push(await sucursales.next());
  }
  const reporte12 = { "Total Ventas": ventaCount, "Ventas Por Sucursal": sucursalesArray };
  console.log("------------------------- Reporte 1 -------------------------");
  console.log(reporte12);
};
const reporte2 = async (venta, fechaDesde, fechaHasta) => {
  let and = [
    { fecha: { $gt: fechaDesde } },
    { fecha: { $lte: fechaHasta } }
  ];
  let ventaPorObraSocialArray = [];
  let ventaPorObraSocial = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: "$cliente.obraSocial.id", nombreObraSocial: { $first: "$cliente.obraSocial.nombre" }, total: { $count: {} } } },
    { $sort: { total: -1 } }
  ]);
  while (await ventaPorObraSocial.hasNext()) {
    let venta2 = await ventaPorObraSocial.next();
    if ((venta2 == null ? void 0 : venta2._id) === null) {
      venta2.nombreObraSocial = "Privado";
    }
    ventaPorObraSocialArray.push(venta2);
  }
  console.log("------------------------- Reporte 2 -------------------------");
  console.log(ventaPorObraSocialArray);
};
const reporte3 = async (venta, fechaDesde, fechaHasta) => {
  var _a;
  let and = [
    { fecha: { $gt: fechaDesde } },
    { fecha: { $lte: fechaHasta } }
  ];
  let totalVentas = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: null, sum: { $sum: "$total" } } }
  ]);
  let total = (_a = await totalVentas.next()) == null ? void 0 : _a.sum;
  let totalPorSucursalArray = [];
  let totalPorSucursal = venta.aggregate([
    { $match: { $and: and } },
    { $group: { _id: "$empleadoCaja.sucursal.nombre", totalVentas$: { $sum: "$total" } } },
    { $sort: { totalVentas: -1 } }
  ]);
  while (await totalPorSucursal.hasNext()) {
    totalPorSucursalArray.push(await totalPorSucursal.next());
  }
  const reporte32 = { "Total Ventas $": total, "Sucursales": totalPorSucursalArray };
  console.log("------------------------- Reporte 3 -------------------------");
  console.log(reporte32);
};
const reporte4 = async (venta, fechaDesde, fechaHasta) => {
  let and = [
    { fecha: { $gt: fechaDesde } },
    { fecha: { $lte: fechaHasta } }
  ];
  let ventasPorTipo = venta.aggregate([
    { $match: { $and: and } },
    { $unwind: "$productos" },
    {
      $group: {
        _id: "$productos.tipo",
        totalVentas: { $count: {} }
      }
    },
    { $sort: { totalVentas: -1 } }
  ]);
  let ventasPorTipoArray = [];
  while (await ventasPorTipo.hasNext()) {
    ventasPorTipoArray.push(await ventasPorTipo.next());
  }
  console.log("------------------------- Reporte 4 -------------------------");
  console.log(ventasPorTipoArray);
};
const reporte5 = async (venta) => {
  let rankingMontoPorProductoSucursal = venta.aggregate([
    { $unwind: "$productos" },
    {
      $group: {
        _id: {
          producto: "$productos.descripcion",
          sucursal: "$empleadoCaja.sucursal.nombre"
        },
        totalVentas: { $sum: "$total" }
      }
    },
    { $sort: { totalVentas: -1 } }
  ]);
  let data = [];
  while (await rankingMontoPorProductoSucursal.hasNext()) {
    data.push(await rankingMontoPorProductoSucursal.next());
  }
  console.log("------------------------- Reporte 5 -------------------------");
  console.log(data);
};
const reporte6 = async (venta) => {
  let rankingCantidadPorProductoSucursal = venta.aggregate([
    { $unwind: "$productos" },
    {
      $group: {
        _id: {
          producto: "$productos.descripcion",
          sucursal: "$empleadoCaja.sucursal.nombre"
        },
        totalVentas: { $count: {} }
      }
    },
    { $sort: { totalVentas: -1 } }
  ]);
  let data = [];
  while (await rankingCantidadPorProductoSucursal.hasNext()) {
    data.push(await rankingCantidadPorProductoSucursal.next());
  }
  console.log("------------------------- Reporte 6 -------------------------");
  console.log(data);
};
const reporte7 = async (venta) => {
  let rankingCantidadClientes = venta.aggregate([
    {
      $group: {
        _id: {
          clienteDni: "$cliente.dni",
          clienteNombre: "$cliente.nombre",
          clienteApellido: "$cliente.apellido"
        },
        totalVentas: { $count: {} }
      }
    },
    { $sort: { totalVentas: -1 } }
  ]);
  let data = [];
  while (await rankingCantidadClientes.hasNext()) {
    data.push(await rankingCantidadClientes.next());
  }
  console.log("------------------------- Reporte 7 -------------------------");
  console.log(data);
};
const reporte8 = async (venta) => {
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
  let data = [];
  while (await rankingCantidadClientes.hasNext()) {
    data.push(await rankingCantidadClientes.next());
  }
  console.log("------------------------- Reporte 8 -------------------------");
  console.log(data);
};
//# sourceMappingURL=index.js.map
