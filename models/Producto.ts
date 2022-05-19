import Laboratorio from "./Laboratorio";

class Producto {
  id: number;
  tipo: string;
  codigo: number;
  laboratorio: Laboratorio;
  descripcion: string;
  precio: number;

  

  constructor(id:number, tipo:string, descripcion:string, precio:number, laboratorio:Laboratorio, codigo:number) {
    this.codigo = codigo;
    this.id = id;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.laboratorio = laboratorio;
  }
}

export default Producto;