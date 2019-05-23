const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function(){
    console.log('escuchando el puerto 3000');
  });