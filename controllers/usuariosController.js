var con = require('../config/conexion');
var usuario = require("../model/usuarios");

module.exports = {

    index:function(req,res){
        
        usuario.obtener(con,function(err,datos) {
            console.log(datos);
            res.render('usuarios/index', {title: "Usuarios", usuarios:datos});
        });

    },

    crear: function (req, res) {
        usuario.obtenerPermisos(con,function(err,datos) {
            res.render("usuarios/crear", {title:"Permisos", permisos:datos});
        });        
    },

    guardar: function (req, res) {
        
        var registro = {   
            nombre: req.body.nombre,
            usuario:req.body.usuario,
            password:req.body.password,         
            inicio: req.body.inicio,
            fotos: req.body.fotos,
            ilustraciones: req.body.ilustraciones,            
            juegos: req.body.juegos,
            videojuegos: req.body.videojuegos
          };
          
        console.log(registro)
    
        usuario.insertar(con, registro, function (err, datos) {
          res.redirect("/usuarios");
        });
        
      },
    

}