var express = require('express') //llamamos a Express
var app = express()
app.use(express.json());
var port = process.env.PORT || 8080 // establecemos nuestro puerto



//MySQL
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root"
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port);

app.post('/validate-anomaly', function (req, res) {

  let dna = req.body.dna;

  //Mostrar matriz en consola
  for (let x = 0; x < dna.length; x++) {
    console.log(dna[x]);
  }

  //Variables por defecto
  res.status(403);
  let anomalia = false;
  let comentario = "Sin anomalías";


  for (let i = 0; i < dna.length; i++) {

    for (let j = 0; j < dna[i].length; j++) {

      //Búsqueda de anomalías en Orientación horizontal
      if (dna[i].length > j + 2 &&
        dna[i][j] == dna[i][j + 1] &&
        dna[i][j] == dna[i][j + 2]) {

        //console.log("Largo eje i= " + dna.length + " \nLargo eje j= " + dna[i].length)
        comentario = "Anomalia en la letra " + dna[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación horizontal";
        console.log(comentario);

        anomalia = true;
        res.status(200)
        return res.json({
          mensaje: comentario
        })

      }
      //Búsqueda de anomalías en Orientación vertical
      if (dna.length > i + 2 &&
        dna[i][j] == dna[i + 1][j] &&
        dna[i][j] == dna[i + 2][j]) {

        //console.log("Largo eje i= " + dna.length + " \nLargo eje j= " + dna[i].length)
        comentario = "Anomalia en la letra " + dna[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación vertical";
        console.log(comentario);

        anomalia = true;
        res.status(200)
        return res.json({
          code: 200,
          mensaje: comentario
        })

      }
      //Búsqueda de anomalías en Orientación diagonal descendente
      if (dna.length > i + 2 &&
        dna[i].length > j + 2 &&
        dna[i][j] == dna[i + 1][j + 1] &&
        dna[i][j] == dna[i + 2][j + 2]) {

        comentario = "Anomalia en la letra " + dna[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación diagonal descendente";
        console.log(comentario);

        anomalia = true;
        res.status(200)
        return res.json({
          mensaje: comentario
        })

      }

      //Búsqueda de anomalías en Orientación diagonal ascendente
      if (dna.length > i + 2 &&
        dna[i].length > j - 2 &&
        dna[i][j] == dna[i + 1][j - 1] &&
        dna[i][j] == dna[i + 2][j - 2]) {


        comentario = "Anomalia en la letra " + dna[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación diagonal ascendente";
        console.log(comentario);

        anomalia = true;
        res.status(200)
        return res.json({
          mensaje: comentario
        })

      }

    }

  }

  return res.json({
    mensaje: comentario
  })

})