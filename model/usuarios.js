module.exports = {

    obtener:function(conexion,funcion){
      conexion.query("Select * from usuarios", funcion);
    },

    obtenerPermisos:function(conexion,funcion){
      conexion.query("Select * from permisos", funcion);
    },

    insertar: function (conexion, datos, funcion) {
      conexion.query(
        "Insert into usuarios (nombre,usuario,contraseña) values (?,?,?)", [datos.nombre, datos.usuario, datos.password],
        funcion
      );

      /*conexion.query("Select top 1 * from usuarios order by idusuario desc", funcion);*/
      
    },
}