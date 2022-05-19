var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Producto_default
});
class Producto {
  id;
  tipo;
  codigo;
  laboratorio;
  descripcion;
  precio;
  constructor(id, tipo, descripcion, precio, laboratorio, codigo) {
    this.codigo = codigo;
    this.id = id;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.laboratorio = laboratorio;
  }
}
var Producto_default = Producto;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Producto.js.map
