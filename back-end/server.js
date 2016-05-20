// Express es el Web Framework (permite crear un web server para recibir y enviar datos en la web)
var express = require('express');
var app = express();
// body-parser es un middleware para Express que sirve para interpretar los datos que recibirá el servicio en distintos formatos (objetos JSON, archivos, etc.)
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Sequelize es en ORM Framework para Bases de Datos relaciones (permite manipular las tablas de una base de datos como objetos en la aplicación)
var Sequelize = require('sequelize');
var sequelize = new Sequelize('fullstack-blur-admin', 'root', ''); // database, user, password



// Crear Modelos (Tablas) y rutas (endpoints)
require('./models/usuario')(app, sequelize);



// Iniciar el servidor
var puerto = 4000;
app.listen(puerto, function() {
	console.log("Servidor está escuchando en el puerto " + puerto);
});
