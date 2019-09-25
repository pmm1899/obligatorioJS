var express =  require("express");
//var mongoose = require("mongoose");
var router=  express.Router();

var objetoController = require("../controllers/objetoController");

router
     .route("/")
     .get(objetoController.get)
     .post(objetoController.create);
router
    .route("/:id")
    .get(objetoController.getById)
    .put(objetoController.update)
    .delete(objetoController.delete);

router
    .route("/encontrarPorOrden/:id")
    .get(objetoController.getByNumOrden);
    
module.exports = router;