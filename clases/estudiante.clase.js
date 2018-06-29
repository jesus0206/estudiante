
class Estudiante{
	constructor(body){
		this.body=body;
	}
	get(){
		return{
				"ci":this.body.ci,
				"nombre":this.body.nombre,
				"apellido":this.body.apellido,
				"cu":{
					"Nro":this.body.Nro,
					"Carrera":this.body.Carrera			
					}
				}
	}
}

module.exports=Estudiante;