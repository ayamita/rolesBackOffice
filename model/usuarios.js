module.exports = {

    obtener:function(conexion,funcion){
      conexion.query("Select * from usuarios", funcion);
    },

    obtenerPermisos:function(conexion,funcion){
      conexion.query("Select * from permisos", funcion);
    },

    retornarDatosIdUsuario: function (conexion, id, funcion) {
      conexion.query("SELECT usuarios.idusuario, permisos.idpermiso, permisosusuario.estatys, usuarios.nombre, usuarios.usuario, usuarios.contraseña, usuarios.superusuario, permisos.nombre as nombre_permiso, permisos.ruta " +
      "FROM permisosusuario "+
      "INNER JOIN usuarios ON permisosusuario.idusuario = usuarios.idusuario " +
      "INNER JOIN permisos ON permisosusuario.idpermiso = permisos.idpermiso " +
      "where usuarios.idusuario =?", [id], funcion);
    },

    actualizar:function(conexion, datos, funcion){
      conexion.query(
        "Update usuarios set usuario = ?, contraseña = ?, usuario = ? where idusuario = ?", [datos.nombre, datos.usuario, datos.password, datos.id],        
        funcion
      );
    },

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
  
    borrar:function(conexion, id, funcion){
      conexion.query("Delete from usuarios where idusuario=?", [id], funcion);
    },

    borrarPermisos:function(conexion, id, funcion){
      conexion.query("Delete from permisosusuario where idusuario=?", [id], funcion);
    }
}