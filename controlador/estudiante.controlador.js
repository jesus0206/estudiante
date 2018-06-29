"use stric"
var Estudiantes=require('../modelo/estudiante.modelo');
var EstudianteClase=require('../clases/estudiante.clase')

function create(req,res){
	EstudianteClase=new EstudianteClase(req.body)
	Estudiantes.create(EstudianteClase.get(),(error)=>{
		if(error)
			res.status(500).send({mensaje:"error al guardar estudiante"});
		else{
			res.status(200).send({mensaje:"estudiante guardado"});
		}
	})
}

function getAll(req,res){
	Estudiantes.find({}, function(err, estudiantes) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(estudiantes);
    });
}
function getId(req,res){
	Estudiantes.findById(req.params.id, function(err, est) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!est) return res.status(404).send("No user found.");
        res.status(200).send(est);
    });
}
function destroy(req,res) {
    Estudiantes.findByIdAndRemove(req.params.id, function(err, estudinte) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: " + estudinte.nombre + " was deleted.");
    });
}
 function update(req, res) {
	EstudianteClase=new EstudianteClase(req.body)
    Estudiantes.findByIdAndUpdate(req.params.id, EstudianteClase.get(), { new: true }, function(err, estudiante) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(estudiante);
    });
}


module.exports={
create,getAll,getId,destroy,update
}

