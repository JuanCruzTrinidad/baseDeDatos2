var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  disconnect: () => disconnect,
  getDatabase: () => getDatabase
});
var import_mongodb = __toModule(require("mongodb"));
var url = `mongodb+srv://dbUser:${process.env["mongodb_password"]}@cluster0.bhndm.mongodb.net/test/`;
const client = new import_mongodb.MongoClient(url);
async function getDatabase() {
  await client.connect();
  return client.db("tpf-db2");
}
async function disconnect() {
  await client.close();
}
function createCollection(dbo, collection) {
  dbo.createCollection(collection, function(err, res) {
    if (err)
      throw err;
    console.log("Collection created!");
  });
}
function insert(dbo, collection, value) {
  dbo.collection(collection).insertOne(value, (err, res) => {
    if (err)
      throw err;
    console.log("1 document inserted");
  });
}
function find(dbo, collection, value) {
  dbo.collection(collection).find(value).toArray(function(err, res) {
    if (err)
      throw err;
    console.log(res);
  });
}
function closedb(db) {
  db.close();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  disconnect,
  getDatabase
});
//# sourceMappingURL=configdb.js.map
