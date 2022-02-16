var express = require('express') //llamamos a Express
var app = express()

var port = process.env.PORT || 8080 // establecemos nuestro puerto

// app.get('/', function (req, res) {
//   res.json({
//     mensaje: '¡Hola Mundo!'
//   })
// })

// app.get('/cervezas', function (req, res) {

//   res.json({
//     mensaje: 'Quiero una cerveza!'
//   })

// })


//app.post('/validate-anomaly', function (req, res) {
app.post('/validate-anomaly', function (req, res) {

  let myJson = JSON.stringify(req.body);
  console.log("mi variable: " + myJson);


  let test01 = req;
  // let test01 = [
  //   ["B", "B", "B", "A", "E"],
  //   ["C", "S", "E", "D", "C"],
  //   ["A", "C", "B", "F", "E"],
  //   ["A", "D", "B", "A", "E"]
  // ];


  let test02 = [
    ["B", "D", "F", "D", "E"],
    ["A", "B", "C", "D", "B"],
    ["F", "C", "B", "E", "E"],
    ["A", "D", "B", "A", "C"]
  ];



  //Mostrar matriz en consola
  for (let x = 0; x < test01.length; x++) {
    console.log(test01[x]);
  }

  let comentario = "Sin anomalías";


  for (let i = 0; i < test01.length; i++) {

    for (let j = 0; j < test01[i].length; j++) {

      //Búsqueda de anomalías en Orientación horizontal
      if (test01[i][j] == test01[i][j + 1] && test01[i][j] == test01[i][j + 2]) {
        console.log("Largo eje i= " + test01.length + " \nLargo eje j= " + test01[i].length)

        comentario = "Anomalia en la letra " + test01[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación horizontal";
        console.log(comentario);

        return res.json({
          mensaje: comentario
        })

      }
      //Búsqueda de anomalías en Orientación vertical
      if (test01[i][j] == test01[i + 1][j] && test01[i][j] == test01[i + 2][j]) {
        console.log("Largo eje i= " + test01.length + " \nLargo eje j= " + test01[i].length)

        comentario = "Anomalia en la letra " + test01[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación vertical";
        console.log(comentario);

        return res.json({
          mensaje: comentario
        })

      }
      //Búsqueda de anomalías en Orientación diagonal descendente
      if (test01[i][j] == test01[i + 1][j + 1] && test01[i][j] == test01[i + 2][j + 2]) {
        console.log("Largo eje i= " + test01.length + " \nLargo eje j= " + test01[i].length)

        comentario = "Anomalia en la letra " + test01[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación diagonal descendente";
        console.log(comentario);

        return res.json({
          mensaje: comentario
        })

      }

      //Búsqueda de anomalías en Orientación diagonal ascendente
      if (test01[i][j] == test01[i + 1][j - 1] && test01[i][j] == test01[i + 2][j - 2]) {

        console.log("Largo eje i= " + test01.length + " \nLargo eje j= " + test01[i].length)
        comentario = "Anomalia en la letra " + test01[i][j] + " | Posición " + "i=" + i + " j=" + j + " | Orientación diagonal ascendente";
        console.log(comentario);

        return res.json({
          mensaje: comentario
        })

      }
      // else {
      //   //Sin anomalías
      //   comentario = "No se encontraron anomalías"
      //   console.log(comentario);
      //   return res.json({
      //     mensaje: comentario
      //   })
      // }





    }



  }


  // let i = 0;
  // let j = 0;


  //console.log(res.json.mensaje)
  //res.json({ mensaje: '¡A beber cerveza!' }) 

})





// app.post('/', function (req, res) {
//   res.json({
//     mensaje: 'Método post'
//   })
// })


// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port);