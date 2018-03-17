'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var morgan = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//importa las rutas que tenemos en el express
var routes = require('./server/routes');
//importa el controlador de eventos
var eventos = require('./server/controllers/evento');
//servir contenido estático del directorio
app.use(express.static(__dirname));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(routes(express.Router()));

var models = require('./server/models');
models.sequelize
    .authenticate()
    .then(function() {
        console.log("Conexión realizado con éxito.!");
        
    })
    .catch(function(error) {
        console.log("Error " + error);
    });

app.listen(3000, function() {
    console.log("App listening on port 3000");
});