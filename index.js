
//importa el modulo express
const express = require('express');
const motorRender = require('express-handlebars');

var fs = require('fs');

//crear la variable app que use express
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', motorRender({
  defaultLayout: false,
}));
app.set('view engine', 'handlebars');

var contador = {
  home: 0,
  nosotros: 0,
  contacto: 0,
};

app.get('/', function (req, res) {
  var contexto = {
    titulo: 'Inicio',
  };
  res.render('home', contexto);
  contador.home++;
  console.log('Pagina vista:', contador);


  //res.sendFile(__dirname + '/public/index.html');
});

app.get('/nosotros', function (req, res) {
  var contexto = {
    titulo: 'nosotros',
  };
  res.render('nosotros', contexto);
  contador.nosotros++;

});

app.get('/contacto', function (req, res) {
  var contexto = {
    titulo: 'contacto',
  };
  res.render('contacto', contexto);
  contador.contacto++;

});

app.get('/admin', function (req, res) {
  
  var contexto = {
    home: contador.home,
    nosotros: contador.nosotros,
    contacto: contador.contacto,
  };
  res.render('admin', contexto);
  let contenido = 'home:' + contador.home + 'nosotros:' + contador.nosotros + 'contacto:' + contador.contacto;
  fs.writeFile('contador.txt', contenido, 'utf8', function () {
    console.log('archivo creado');
  });

});

app.listen(3000, function () {
  console.log('escuchando el puerto 3000');
});