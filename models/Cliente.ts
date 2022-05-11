import Domicilio from "./domicilio";
import ObraSocial from "./obraSocial";

class Cliente {
  id: number;
  nombre: string;
  apellido: string;
  dni: number;
  numeroAfiliado: number;
  domicilio: Domicilio
  obraSocial: ObraSocial

  constructor(nombre:string, id:number, apellido:string, dni:number, numeroAfiliado:number, domicilio:Domicilio, obraSocial:ObraSocial) {
    this.nombre = nombre;
    this.id = id;
    this.apellido = apellido;
    this.dni = dni;
    this.numeroAfiliado = numeroAfiliado;
    this.domicilio = domicilio;
    this.obraSocial = obraSocial
  }
}

export default Cliente;