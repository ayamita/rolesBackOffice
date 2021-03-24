var con = require('../config/conexion');
var usuario = require("../model/usuarios");

module.exports = {

    index:function(req,res){        
        usuario.obtener(con,function(err,datos) {
            console.log(datos);
            res.render('usuarios/index', { message: req.flash('message'), usuarios:datos});
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
        //console.log(registro)
        usuario.insertar(con, registro, function (err, datos) {
            req.flash('message', 'El usuario se creo correctamente');
            res.redirect("/usuarios");
        });              
      },

    actualizar:function(req, res) {
        var registro = {   
            id:req.body.id,
            nombre: req.body.nombre,
            usuario:req.body.usuario,
            password:req.body.password,         
            inicio: req.body.inicio,
            fotos: req.body.fotos,
            ilustraciones: req.body.ilustraciones,            
            juegos: req.body.juegos,
            videojuegos: req.body.videojuegos
          };   
      
        usuario.actualizar(con, registro, function (err, datos) {
            usuario.actualizarPermisos(con, registro, function(err, datos){     
                req.flash('message', 'El usuario se modifico correctamente');           
                res.redirect('/usuarios'); 
            })                       
        });
    },

    eliminar:function (req, res) {
        console.log("resepcion de datos");
        console.log(req.params.id);
        usuario.retornarDatosIdUsuario(con, req.params.id, function (err) {
        usuario.borrar(con, req.params.id, function (err) {
            usuario.borrarPermisos(con, req.params.id, function (err) {
                req.flash('message', 'El usuario se elimino correctamente');
                res.redirect('/usuarios');
            })
        })
        })
    },

    editar: function (req, res) {          
    usuario.retornarDatosIdUsuario(con, req.params.id, function (err, registros) {     
        console.log(registros)   
        res.render("usuarios/editar", { title:'Usuarios', usuarios:registros[0], permisos:registros});
        
    });},
}