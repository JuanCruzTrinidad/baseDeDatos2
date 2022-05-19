var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Empleado_default
});
class Empleado {
  id;
  nombre;
  apellido;
  dni;
  cuil;
  domicilio;
  obraSocial;
  numeroAfiliado;
  sucursal;
  constructor(id, nombre, apellido, dni, cuil, domicilio, obraSocial, numeroAfiliado, sucursal) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.cuil = cuil;
    this.domicilio = domicilio;
    this.obraSocial = obraSocial;
    this.numeroAfiliado = numeroAfiliado;
    this.sucursal = sucursal;
  }
}
var Empleado_default = Empleado;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Empleado.js.map
