
import { MongoClient } from "mongodb";

var url = `mongodb+srv://dbUser:${process.env['mongodb_password']}@cluster0.bhndm.mongodb.net/test/`;

const client = new MongoClient(url);

export async function getDatabase() {
  await client.connect();
  return  client.db("tpf-db2");
}

export async function disconnect() {
  await client.close();
}
// MongoClient.connect(url, function(err: any, db: any) {
//     if (err) throw err;
//     var dbo = db.db("tpf-db2");

//     // Creación de las collections
//     /*
//     createCollection(dbo, "obra-social");
//     createCollection(dbo, "venta");
//     createCollection(dbo, "cliente");
//     createCollection(dbo, "domicilio");
//     createCollection(dbo, "empleado");
//     createCollection(dbo, "forma-de-pago");
//     createCollection(dbo, "laboratorio");
//     createCollection(dbo, "producto");
//     createCollection(dbo, "sucursal");
//     */

//     // Inserción de datos 1
//     // insert(dbo, "obra-social", { nombre: "OSDE" });
//     // insert(dbo, "domicilio", {
//     //     calle: "Calle falsa",
//     //     numero: 123,
//     //     Localidad: "Localidad Falsa",
//     //     provincia: "Provincia Falsa" 
//     // });
  
//     // insert(dbo, "cliente", { nombre: "Juan Carlos", apellido: "Soria", dni: 1231232, numeroAfiliado: 13213222, domicilio:  });
  
//   find(dbo, "obra-social", "OSDE");

// });

function createCollection(dbo: any, collection: string) {
    dbo.createCollection(collection, function(err: any, res: any) {
        if (err) throw err;
        console.log("Collection created!");
    });
}

export async function  insert ( collection: string, value: any) {
  const database = await getDatabase();
  const insert = await database.collection(collection).insertOne(value)
  console.dir(insert, {depth: null});
}

function find(dbo: any, collection: string, value: any) {
    dbo.collection(collection).find(value).toArray(function(err: any, res: any) {
        if (err) throw err;
        console.log(res);
    });
}

function closedb(db: any) {
    db.close();
}