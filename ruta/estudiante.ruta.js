"use strict"

var express=require('express');
var controladorEstudiante=require('../controlador/estudiante.controlador');

var api=express.Router();

api.post('/create',controladorEstudiante.create);
api.get('/getAll',controladorEstudiante.getAll);
api.get('/getId/:id',controladorEstudiante.getId);
api.delete('/delete/:id',controladorEstudiante.destroy);
api.put('/update/:id',controladorEstudiante.update);

module.exports=api;