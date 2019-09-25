var mongoose = require("mongoose");
var Objeto = require("../models/objeto");
var TipoObjeto = require("../models/tipoObjeto");

module.exports.get = function (req, res){
    Objeto.find((err, result)=>{
        if (err) throw err;

        res.json({ mensaje : "GET OK", resultado: result});
    });
};

module.exports.create = function (req, res){
    const { orden, tipo, description, precio, estado } =  req.body;

    TipoObjeto.createTipoObjeto.findById(tipo, ((err, result) => {
        if (err) throw err;
        
        if (result == null){
            res.statusCode = 404;
            res.json({ mensaje : "ERROR/ tipo not found!!", resultado: result});
        } else {
            var objeto = new Objeto();
            objeto.orden = orden;
            objeto.description = description;
            objeto.precio = precio;
            objeto.estado = estado;
            objeto.tipo =  mongoose.Types.ObjectId(tipo); 

            objeto.save((err, result) => {
                if (err) throw err;
                
                res.json({ mensaje : "POST OK", resultado: result});
            });
        }
    }));
};

module.exports.getById = function (req, res){
    Objeto.findById(req.params.id, (err, result)=>{
        if (err) throw err;

        res.json({ mensaje : "GET/ID OK", resultado: result});
    });
};

module.exports.update = function (req, res){

    const updateObj = { 
        orden: req.body.orden, 
        description: req.body.description,
        precio: req.body.precio,
        tipo : mongoose.Types.ObjectId(req.body.tipo), 
        estado: req.body.estado
    };

    Objeto.findByIdAndUpdate(req.params.id, updateObj, {new: true},  (err, result)=>{
        if (err) throw err;

        res.json({ mensaje : "PUT/ID OK", resultado: result});
    });
};

module.exports.delete = function (req, res){
    Objeto.findByIdAndRemove(req.params.id, (err, result)=>{
        if (err) throw err;
            
        res.json({ mensaje : "DELETE/ID OK", resultado: undefined});
    });
};

module.exports.getByNumOrden = function (req, res){
    var query = {
        orden : req.params.id
    };

    Objeto.find(query, (err, result)=>{
         if (err) throw err;

         res.json({ mensaje : "GET/ORDEN/ID OK", resultado: result});
    });
};
