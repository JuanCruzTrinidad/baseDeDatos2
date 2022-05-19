var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Sucursal_default
});
class Sucursal {
  id;
  nombre;
  domicilio;
  encargado;
  constructor(nombre, id, domicilio, encargado) {
    this.nombre = nombre;
    this.id = id;
    this.domicilio = domicilio;
    this.encargado = encargado;
  }
}
var Sucursal_default = Sucursal;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Sucursal.js.map
