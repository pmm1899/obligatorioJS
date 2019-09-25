
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TipoObjetoSchema = new Schema({
    codigo: { type: String, unique : true},
    nombre: String
});

module.exports = { 
    createTipoObjeto : mongoose.model("TipoObjeto", TipoObjetoSchema), 
    tipoObjetoSchema : TipoObjetoSchema
};