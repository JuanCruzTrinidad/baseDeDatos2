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
var import_domicilio = __toModule(require("./models/domicilio"));
var import_obraSocial = __toModule(require("./models/obraSocial"));
let osde = new import_obraSocial.default("OSDE", 1);
let domicilio = new import_domicilio.default("Calle falsa", 1, "Localidad Falsa", "Provincia falsa", 123);
let cliente = new import_Cliente.default("Nombre", 1, "Apellido", 4081191, 2313123, domicilio, osde);
console.log(JSON.stringify(cliente));
console.log(cliente);
//# sourceMappingURL=index.js.map
