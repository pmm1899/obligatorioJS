var mongoose = require("mongoose");
var TipoObjeto = require("../models/tipoObjeto");

module.exports.get = function (req, res){
    TipoObjeto.createTipoObjeto.find((err, result)=>{
        if (err) throw err;

        res.json({ mensaje : "GET OK", resultado: result});
    });
};

module.exports.create = function (req, res){
    const { codigo, nombre } =  req.body;

    var tipoObjeto = TipoObjeto.createTipoObjeto();
    tipoObjeto.codigo = codigo;
    tipoObjeto.nombre = nombre;

    tipoObjeto.save((err, result) => {
        if (err) throw err;

        res.json({ mensaje : "POST OK", resultado: result});
    });
};

module.exports.getById = function (req, res){
    TipoObjeto.createTipoObjeto.findById(req.params.id, (err, result)=>{
        if (err) throw err;

        res.json({ mensaje : "GET/ID OK", resultado: result});
    });
};

module.exports.update = function (req, res){

    const updateObj = {nombre : req.body.nombre}

    TipoObjeto.createTipoObjeto.findByIdAndUpdate(req.params.id, updateObj, {new: true}, (err, result)=>{
        if (err) throw err;

        res.json({ mensaje : "PUT/ID OK", resultado: result});
    });
};

module.exports.delete = function (req, res){
    TipoObjeto.createTipoObjeto.findByIdAndRemove(req.params.id, (err, result)=>{
        if (err) throw err;
            
        res.json({ mensaje : "DELETE/ID OK", resultado: undefined});
    });
};
