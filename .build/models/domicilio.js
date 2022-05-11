var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => domicilio_default
});
class Domicilio {
  id;
  calle;
  numero;
  localidad;
  provincia;
  constructor(calle, id, localidad, provincia, numero) {
    this.calle = calle;
    this.id = id;
    this.numero = numero;
    this.localidad = localidad;
    this.provincia = provincia;
  }
}
var domicilio_default = Domicilio;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=domicilio.js.map
