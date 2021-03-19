module.exports = {

    obtener:function(conexion,funcion){
      conexion.query("Select * from usuarios", funcion);
    },

    obtenerPermisos:function(conexion,funcion){
      conexion.query("Select * from permisos", funcion);
    },

    /*
    insertar: function (conexion, datos, funcion) {
      conexion.query(
        "Insert into usuarios (nombre,usuario,contraseña) values (?,?,?)", [datos.nombre, datos.usuario, datos.password],
        funcion
      );
    },*/

     insertar: function (conexion, datos, funcion) {
      conexion.query(
        "Insert into usuarios (nombre,usuario,contraseña) values (?,?,?)", [datos.nombre, datos.usuario, datos.password],
        function (err, result){
          if (err) throw err;        
          console.log(result.insertId);

          var idusuario = result.insertId;

          var values = [
            [idusuario, 1, datos.inicio],
            [idusuario, 2, datos.fotos],
            [idusuario, 3, datos.ilustraciones],
            [idusuario, 4, datos.juegos],
            [idusuario, 5, datos.videojuegos]
          ];
          
          console.log(values);

          conexion.query(
            "Insert into permisosusuario values ?", [values],
            funcion
          );                   
        }
      );
    },  
    
  

}