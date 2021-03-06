
class Domicilio {
  id: number;
  calle: string;
  numero: number;
  localidad: string;
  provincia: string;

  constructor(calle:string, id:number, localidad:string, provincia:string, numero:number) {
    this.calle = calle;
    this.id = id;
    this.numero = numero;
    this.localidad = localidad;
    this.provincia = provincia;
  }
}

export default Domicilio;

/*
import mongoose from 'mongoose';
const { Schema } = mongoose;

const domicilio = new Schema({
  id: Number,
  calle: String,
  numero: String,
  localidad: String,
  provincia: String
});

export default domicilio;
*/