
var mongoose = require("mongoose");
var TipoObjeto = require("./tipoObjeto");
var Schema = mongoose.Schema;

var ObjetoSchema = new Schema({
    orden: Number,
    tipo: {type: Schema.Types.ObjectId, ref: "TipoObjeto", required: true }, 
    //tipo: {type: TipoObjeto.ObjectId, required: true }, 
    estado: String,
    descripcion: String,
    precio: Number
});

module.exports = mongoose.model("Objeto", ObjetoSchema);