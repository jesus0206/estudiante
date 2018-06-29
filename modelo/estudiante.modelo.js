"use strict"

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UsuarioSchema=Schema({
	ci:String,
	cu:{Nro:String,Carrera:String},
	nombre:String,
	apellido:String
});

module.exports=mongoose.model('Estudiantes',UsuarioSchema);