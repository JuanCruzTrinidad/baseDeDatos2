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
var import_Cliente = __toModule(require("./models/Cliente"));
var import_Domicilio = __toModule(require("./models/Domicilio"));
var import_Empleado = __toModule(require("./models/Empleado"));
var import_FormaDePago = __toModule(require("./models/FormaDePago"));
var import_Laboratorio = __toModule(require("./models/Laboratorio"));
var import_ObraSocial = __toModule(require("./models/ObraSocial"));
var import_Producto = __toModule(require("./models/Producto"));
var import_Sucursal = __toModule(require("./models/Sucursal"));
var import_Venta = __toModule(require("./models/Venta"));
let osde = new import_ObraSocial.default("OSDE", 1);
let domicilio = new import_Domicilio.default("Calle falsa", 1, "Localidad Falsa", "Provincia falsa", 123);
let cliente = new import_Cliente.default("Nombre", 1, "Apellido", 4081191, 2313123, domicilio, osde);
let laboratorio = new import_Laboratorio.default("Laboratorio Falso", 1);
let productoUno = new import_Producto.default(1, "Tipo Falso", "Un producto falso", 200, laboratorio, 1234);
let productoDos = new import_Producto.default(2, "Tipo Verdadero", "Un producto verdadero", 300, laboratorio, 124);
let formaDePago = new import_FormaDePago.default("Tarjeta", 1);
let empleadoEncargado = new import_Empleado.default(1, "Empleado Encargado", "Trinidad", 40811091, "20-40811091-3", domicilio, osde, 1111111);
let sucursal = new import_Sucursal.default("Sucursal 1", 1, domicilio, empleadoEncargado);
let empleadoVenta = new import_Empleado.default(1, "Empleado venta", "Apellido", 40811091, "20-40811091-3", domicilio, osde, 1234, sucursal);
let empleadoCaja = new import_Empleado.default(1, "Empleado caja", "Apellido Cja", 1234123123, "20-1234123123-3", domicilio, osde, 12346234, sucursal);
let ventaUno = new import_Venta.default(1, new Date(), "123123", formaDePago, empleadoCaja, empleadoVenta, cliente, [productoUno, productoDos]);
console.dir(ventaUno, { depth: null });
//# sourceMappingURL=index.js.map
