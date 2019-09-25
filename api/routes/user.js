var express =  require("express");
var router=  express.Router();
var User = require("../models/user");


router
    .route("/user")
    .get((req, res) => {
        User.find((err, objs)=>{
            if (err) throw err;

            res.json(objs);
        });
    })
    .post((req, res) =>{
        const { name } =  req.body;

        var user = new User();
        user.name = name;

        objeto.save((err) => {
            if (err) throw err;

            res.json({message: "Usuario creado correctamente"});
        });
    });

module.exports = router;