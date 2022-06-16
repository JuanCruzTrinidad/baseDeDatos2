import Cliente from "./Cliente";
import Empleado from "./Empleado";
import FormaDePago from "./FormaDePago";
import Producto from "./Producto";

class Venta {
  fecha: Date;
  numTicket: string;
  total?: number;
  formaDePago: FormaDePago;
  empleadoCaja: Empleado;
  empleadoAsistente: Empleado;
  cliente: Cliente;
  productos: Producto[];

  constructor(fecha: Date, numTicket: string, formaDePago: FormaDePago, empleadoCaja: Empleado, empleadoAsistente: Empleado, cliente: Cliente, productos: Producto[], total?: number) {
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

export default Venta;