import Domicilio from "./Domicilio";
import ObraSocial from "./ObraSocial";
import Sucursal from "./Sucursal";

class Empleado {
  id: number;
  nombre: string;
  apellido: string;
  dni: number;
  cuil: string;
  domicilio: Domicilio;
  obraSocial: ObraSocial;
  numeroAfiliado: number;
  sucursal?: Sucursal;

  constructor(id: number, nombre: string, apellido: string, dni: number, cuil: string, domicilio: Domicilio, obraSocial: ObraSocial, numeroAfiliado: number, sucursal?: Sucursal)  {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.cuil = cuil;
    this.domicilio = domicilio;
    this.obraSocial = obraSocial
    this.numeroAfiliado = numeroAfiliado;
    this.sucursal = sucursal;
  }
}
export default Empleado;