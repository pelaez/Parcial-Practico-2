
//importa el modulo express
const express = require('express');
const motorRender = require('express-handlebars');

//crear la variable app que use express
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars',motorRender());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    var contexto = {
      titulo: 'Inicio',
    };
    res.render('home', contexto);
    //res.sendFile(__dirname + '/public/index.html');
  });

app.listen(3000, function(){
    console.log('escuchando el puerto 3000');
  });