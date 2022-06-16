
import Cliente from "./models/Cliente";
import Domicilio from "./models/Domicilio";
import Empleado from "./models/Empleado";
import FormaDePago from "./models/FormaDePago";
import Laboratorio from "./models/Laboratorio";
import ObraSocial from "./models/ObraSocial";
import Producto from "./models/Producto";
import Sucursal from "./models/Sucursal";
import Venta from "./models/Venta";

/*
let obraSocial1: ObraSocial = new ObraSocial("OSDE", 1);
let obraSocial2: ObraSocial = new ObraSocial("Swiss Medical", 2);
let obraSocial3: ObraSocial = new ObraSocial("IOMA", 3);

let domicilio1: Domicilio = new Domicilio("Calle falsa", 1, "Localidad Falsa", "Provincia falsa", 123);
let domicilio2: Domicilio = new Domicilio("Independencia", 2, "Monte Grande", "Buenos Aires", 185);
let domicilio3: Domicilio = new Domicilio("Edison", 3, "Luis Guillon", "Buenos Aires", 1230);
let domicilio4: Domicilio = new Domicilio("Luis de Sarro", 4, "Luis Guillon", "Buenos Aires", 1720);

let cliente1: Cliente = new Cliente("Carlos", 1, "Menem", 42326541, 42326541, domicilio1, obraSocial1);
let cliente2: Cliente = new Cliente("Lionel", 2, "Messi", 36957401, 36957401, domicilio2);
let cliente3: Cliente = new Cliente("Samuel", 3, "Jackson", 35514578, 35514578, domicilio3, obraSocial2);
let cliente4: Cliente = new Cliente("Tiago", 4, "Pzk", 40812191, 40812191, domicilio4, obraSocial3);
let cliente5: Cliente = new Cliente("Rodrigo", 4, "De Paul", 123123123, 31231312, domicilio4);

let laboratorio: Laboratorio = new Laboratorio("Laboratorio Falso", 1);
let laboratorio2: Laboratorio = new Laboratorio("TermoRise", 2);
let laboratorio3: Laboratorio = new Laboratorio("Janito", 3);
let laboratorio4: Laboratorio = new Laboratorio("Remedicus", 4);

let productoUno: Producto = new Producto(1, "Perfumeria", "Desodorante", 200, laboratorio, 1234);
let productoDos: Producto = new Producto(2, "Perfumeria", "Jabon", 300, laboratorio, 124);
let productoTres: Producto = new Producto(3, "Farmacia", "Jarabe", 350, laboratorio2, 900);
let productoCuatro: Producto = new Producto(4, "Farmacia", "Tafirol", 700, laboratorio3, 200);
let productoQuinto: Producto = new Producto(5, "Farmacia", "Tampones", 31240, laboratorio4, 3123);

let formaDePago: FormaDePago = new FormaDePago("Tarjeta", 1);
let formaDePago2: FormaDePago = new FormaDePago("Efectivo", 2);
let formaDePago3: FormaDePago = new FormaDePago("Mercado Pago", 3);

let empleadoEncargado: Empleado = new Empleado(1, "Juan Carlos", "Trinidad", 95565942, "20-95565942-3", domicilio1, obraSocial1, 95565942);
let empleadoEncargado2: Empleado = new Empleado(2, "Roman", "Riquelme", 25654824, "20-25654824-3", domicilio2, obraSocial3, 25654824);
let empleadoEncargado3: Empleado = new Empleado(3, "Exequiel", "Zeballos", 54843512, "20-54843512-3", domicilio3, obraSocial3, 54843512);


let sucursal: Sucursal = new Sucursal("Sucursal 1", 1, domicilio2, empleadoEncargado);
let sucursal2: Sucursal = new Sucursal("Sucursal Guillon", 2, domicilio3, empleadoEncargado);
let sucursal3: Sucursal = new Sucursal("Sucursal El Jaguel", 3, domicilio4, empleadoEncargado);

let empleadoVenta: Empleado = new Empleado(10, "Empleado venta", "Apellido", 40811091, "20-40811091-3", domicilio2, obraSocial1, 1234, sucursal);
let empleadoCaja: Empleado = new Empleado(11, "Empleado caja", "Apellido Cja", 1234123123, "20-1234123123-3", domicilio3, obraSocial3, 12346234, sucursal);
let empleadoVenta2: Empleado = new Empleado(12, "Maximo", "Power", 24335335, "20-24335335-3", domicilio2, obraSocial2, 1234, sucursal2);
let empleadoCaja2: Empleado = new Empleado(13, "Juan Sebastian", "Veron", 1234123123, "20-1234123123-3", domicilio3, obraSocial3, 12346234, sucursal2);
let empleadoVenta3: Empleado = new Empleado(14, "Marcelo", "Gallardo", 40811091, "20-40811091-3", domicilio2, obraSocial3, 1234, sucursal3);
let empleadoCaja3: Empleado = new Empleado(15, "Luis", "Advincula", 1234123123, "20-1234123123-3", domicilio3, obraSocial3, 12346234, sucursal3);

let ventaUno: Venta = new Venta(new Date("2022 01 05"), "123123", formaDePago, empleadoCaja, empleadoVenta, cliente1, [productoUno, productoDos]);

let ventaDos: Venta = new Venta(new Date("2022 05 25"), "123321", formaDePago2, empleadoCaja2, empleadoVenta2, cliente2, [productoUno, productoTres]);

let ventaTres: Venta = new Venta(new Date("2022 05 27"), "459751", formaDePago2, empleadoCaja2, empleadoVenta3, cliente5, [productoDos, productoTres, productoCuatro]);

let ventaCuatro: Venta = new Venta(new Date("2022 05 29"), "784549", formaDePago3, empleadoCaja3, empleadoVenta, cliente4, [productoUno, productoTres, productoQuinto]);

let ventaCinco: Venta = new Venta(new Date("2022 05 30"), "41234112", formaDePago, empleadoCaja, empleadoVenta2, cliente1, [productoUno, productoTres]);

let ventaSeis: Venta = new Venta(new Date("2022 05 31"), "66123321", formaDePago2, empleadoCaja2, empleadoVenta2, cliente2, [productoUno, productoUno]);

let ventaSiete: Venta = new Venta(new Date("2022 05 25"), "123333321", formaDePago2, empleadoCaja2, empleadoVenta2, cliente3, [productoDos, productoDos]);

let ventaOcho: Venta = new Venta(new Date("2022 06 02"), "123666321", formaDePago, empleadoCaja2, empleadoVenta2, cliente4, [productoTres, productoTres]);

let ventaNueve: Venta = new Venta(new Date("2022 06 01"), "12543321", formaDePago3, empleadoCaja2, empleadoVenta2, cliente5, [productoUno, productoTres]);

let ventaDiez: Venta = new Venta(new Date("2022 06 01"), "1243321", formaDePago2, empleadoCaja2, empleadoVenta2, cliente3, [productoCuatro, productoCuatro]);
*/