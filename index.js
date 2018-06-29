"uses strict"

var mongoose=require('mongoose');

var app=require('./app');

var port=process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/db_estudiantes',(error,res)=>{
	if(error)throw error;
	else{ 
		console.log('conexion exitosa a BD');
		app.listen(port,function(){
			console.log("Servidor de la api en 	http://localhost:"+port);
		})
	}
});