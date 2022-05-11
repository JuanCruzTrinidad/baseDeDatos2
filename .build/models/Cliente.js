var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Cliente_default
});
class Cliente {
  id;
  nombre;
  apellido;
  dni;
  numeroAfiliado;
  domicilio;
  obraSocial;
  constructor(nombre, id, apellido, dni, numeroAfiliado, domicilio, obraSocial) {
    this.nombre = nombre;
    this.id = id;
    this.apellido = apellido;
    this.dni = dni;
    this.numeroAfiliado = numeroAfiliado;
    this.domicilio = domicilio;
    this.obraSocial = obraSocial;
  }
}
var Cliente_default = Cliente;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Cliente.js.map
