import Domicilio from "./Domicilio";
import Empleado from "./Empleado";

class Sucursal {
  id: number;
  nombre: string;
  domicilio: Domicilio;
  encargado?: Empleado;

  constructor(nombre:string, id:number, domicilio: Domicilio, encargado?: Empleado) {
    this.nombre = nombre;
    this.id = id;
    this.domicilio = domicilio;
    this.encargado = encargado;
  }
}

export default Sucursal;