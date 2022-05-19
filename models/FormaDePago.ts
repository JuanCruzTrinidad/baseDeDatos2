class FormaDePago {
  id: number;
  nombre: string;

  constructor(nombre:string, id:number) {
    this.nombre = nombre;
    this.id = id;
  }
}

export default FormaDePago;