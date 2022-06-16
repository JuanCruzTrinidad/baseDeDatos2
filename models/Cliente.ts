
import Domicilio from "./Domicilio";
import ObraSocial from "./ObraSocial";

class Cliente {
  id: number;
  nombre: string;
  apellido: string;
  dni: number;
  numeroAfiliado: number;
  domicilio: Domicilio
  obraSocial?: ObraSocial

  constructor(nombre:string, id:number, apellido:string, dni:number, numeroAfiliado:number, domicilio:Domicilio, obraSocial?:ObraSocial) {
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

/*
import mongoose from 'mongoose';
const { Schema } = mongoose;

const Cliente = new Schema({
  id: Number,
  nombre: String,
  apellido: String,
  domicilio: Domicilio
});

export default Cliente;*/