var express = require('express') //llamamos a Express
var app = express()
app.use(express.json());
var port = process.env.PORT || 8080 // establecemos nuestro puerto
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});





//app.post('/validate-anomaly', function (req, res) {
app.post('/validate-anomaly', function (req, res) {


  let test01 = req.body.data;

  //Mostrar matriz en consola
  for (let x = 0; x < test01.length; x++) {
    console.log(test01[x]);
  }

  let anomalia = false;
  res.status(403);
  let comentario = "Sin anomalías";


  for (let i = 0; i < test01.length; i++) {

    for (let j = 0; j < test01[i].length; j++) {

      //Búsqueda de anomalías en Orientación horizontal
      if (test01[i].length > j + 2 && test01[i][j] == test01[i][j + 1] && test01[i][j] == test01[i][j + 2]) {

        //console.log("Largo eje i= " + test01.length + " \nLargo eje j= " + test01[i].length)
        comentario = "Anomalia en la letra " + test01[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación horizontal";
        console.log(comentario);

        anomalia = true;
        res.status(200)
        return res.json({
          mensaje: comentario
        })

      }
      //Búsqueda de anomalías en Orientación vertical
      if (test01.length > i + 2 &&
        test01[i][j] == test01[i + 1][j] &&
        test01[i][j] == test01[i + 2][j]) {

        //console.log("Largo eje i= " + test01.length + " \nLargo eje j= " + test01[i].length)
        comentario = "Anomalia en la letra " + test01[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación vertical";
        console.log(comentario);

        anomalia = true;
        res.status(200)
        return res.json({
          code: 200,
          mensaje: comentario
        })

      }
      //Búsqueda de anomalías en Orientación diagonal descendente
      if (test01.length > i + 2 && test01[i].length > j + 2 &&
        test01[i][j] == test01[i + 1][j + 1] &&
        test01[i][j] == test01[i + 2][j + 2]) {

        //console.log("Largo eje i= " + test01.length + " \nLargo eje j= " + test01[i].length)
        comentario = "Anomalia en la letra " + test01[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación diagonal descendente";
        console.log(comentario);

        anomalia = true;
        res.status(200)
        return res.json({
          mensaje: comentario
        })

      }

      //Búsqueda de anomalías en Orientación diagonal ascendente
      if (test01.length > i + 2 && test01[i].length > j - 2 &&
        test01[i][j] == test01[i + 1][j - 1] &&
        test01[i][j] == test01[i + 2][j - 2]) {

        //console.log("Largo eje i= " + test01.length + " \nLargo eje j= " + test01[i].length)
        comentario = "Anomalia en la letra " + test01[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación diagonal ascendente";
        console.log(comentario);

        anomalia = true;
        res.status(200)
        return res.json({
          mensaje: comentario
        })

      }



      

    }

  }

  function actualizarBD() {
        

  }

  return res.json({
    mensaje: comentario
  })



})





// app.post('/', function (req, res) {
//   res.json({
//     mensaje: 'Método post'
//   })
// })


// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port);