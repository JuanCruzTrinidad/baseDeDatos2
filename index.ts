import Cliente from "./models/Cliente";
import Domicilio from "./models/domicilio";
import ObraSocial from "./models/obraSocial";

let osde:ObraSocial = new ObraSocial("OSDE", 1);
let domicilio:Domicilio = new Domicilio("Calle falsa", 1, "Localidad Falsa", "Provincia falsa", 123)
let cliente:Cliente = new Cliente("Nombre", 1, "Apellido", 4081191, 2313123, domicilio, osde)
console.log(JSON.stringify(cliente))
console.log(cliente)