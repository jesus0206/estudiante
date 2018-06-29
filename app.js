var express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

 var rutaEstudiante=require('./ruta/estudiante.ruta.js');

app.use('/estudiante',rutaEstudiante);	

module.exports=app;