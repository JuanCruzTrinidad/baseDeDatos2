var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Venta_default
});
class Venta {
  id;
  fecha;
  numTicket;
  total;
  formaDePago;
  empleadoCaja;
  empleadoAsistente;
  cliente;
  productos;
  constructor(id, fecha, numTicket, formaDePago, empleadoCaja, empleadoAsistente, cliente, productos, total) {
    this.id = id;
    this.fecha = fecha;
    this.numTicket = numTicket;
    this.total = total;
    this.formaDePago = formaDePago;
    this.empleadoCaja = empleadoCaja;
    this.empleadoAsistente = empleadoAsistente;
    this.cliente = cliente;
    this.productos = productos;
  }
}
var Venta_default = Venta;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Venta.js.map
