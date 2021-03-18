var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'permisos'
  /*
  host     : 'us-cdbr-east-03.cleardb.com',
  user     : 'b72c3529e0d0ec',
  password : '8163d94a',
  database: 'heroku_0c5a3a8719c90b2'
  */
});

connection.connect(
(err)=>{

    if(!err){console.log("conexion establecida");}
    else {console.log("conexion fallida"); }
}

);

module.exports=connection;

// connection.query("SELECT * FROM `tblproductos", function(err,resultados){
//     console.log(resultados);
// });

// connection.end();