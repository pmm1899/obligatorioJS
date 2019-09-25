var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var config = require("./config/properties.json");
var objetoRouter = require("./routes/objeto");
var tipoObjetoRouter = require("./routes/tipoObjeto");


var app = express();

//app use es un midleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT", "POST", "GET", "DELETE", "OPTIONS");

    next();
});


/*app.all('/*',function(req,res){
    var path = req.url;
    switch(path){
    case '/api/tiposObjeto':
      //logic
    default:
      res.send("Invalid");
    }
});*/

app.use('/api/tiposObjeto', tipoObjetoRouter);
app.use('/api/objetos', objetoRouter);
app.use(function(req, res){
    res.type("text/plain");
    res.status(400).send("404 - Metodo no encontrado!!");
});
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send("Error interno!!");
})

mongoose.connect(config.mongo_url, { useNewUrlParser: true })
.then(()=>{
    console.log("MongoDB conectado OK!")
    app.listen(config.port, ()=> console.log("Aplicacion esta corriendo en puerto " + config.port));
}).catch((err) => {
    console.log("Error conectando a: "+ config.mongo_url)
})


