import Cliente from "./models/Cliente";
import Domicilio from "./models/Domicilio";
import Empleado from "./models/Empleado";
import FormaDePago from "./models/FormaDePago";
import Laboratorio from "./models/Laboratorio";
import ObraSocial from "./models/ObraSocial";
import Producto from "./models/Producto";
import Sucursal from "./models/Sucursal";
import Venta from "./models/Venta";
                              
let osde: ObraSocial = new ObraSocial("OSDE", 1);
let domicilio: Domicilio = new Domicilio("Calle falsa", 1, "Localidad Falsa", "Provincia falsa", 123);
let cliente: Cliente = new Cliente("Nombre", 1, "Apellido", 4081191, 2313123, domicilio, osde);
let laboratorio: Laboratorio = new Laboratorio("Laboratorio Falso", 1);
let productoUno: Producto = new Producto(1, "Tipo Falso", "Un producto falso", 200, laboratorio, 1234);
let productoDos: Producto = new Producto(2, "Tipo Verdadero", "Un producto verdadero", 300, laboratorio, 124);
let formaDePago: FormaDePago = new FormaDePago("Tarjeta", 1);
let empleadoEncargado: Empleado = new Empleado(1, "Empleado Encargado", "Trinidad", 40811091, "20-40811091-3", domicilio, osde, 1111111);
let sucursal: Sucursal = new Sucursal("Sucursal 1", 1, domicilio, empleadoEncargado);
let empleadoVenta: Empleado = new Empleado(1, "Empleado venta", "Apellido", 40811091, "20-40811091-3", domicilio, osde, 1234, sucursal);
let empleadoCaja: Empleado = new Empleado(1, "Empleado caja", "Apellido Cja", 1234123123, "20-1234123123-3", domicilio, osde, 12346234, sucursal);

let ventaUno: Venta = new Venta(1, new Date, "123123", formaDePago, empleadoCaja, empleadoVenta, cliente, [productoUno, productoDos]);

console.dir(ventaUno, {depth: null});