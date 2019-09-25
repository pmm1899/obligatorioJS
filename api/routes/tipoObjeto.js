var express =  require("express");
var router=  express.Router();

var tipoObjetoController = require("../controllers/tipoObjetoController");

router
    .route("/")
    .get(tipoObjetoController.get)
    .post(tipoObjetoController.create);
    
 router
    .route("/:id")
    .get(tipoObjetoController.getById)
    .put(tipoObjetoController.update)
    .delete(tipoObjetoController.delete);
    
module.exports = router;