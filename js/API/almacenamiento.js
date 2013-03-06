// Almacenamiento

function accesoBD(nombre,tamano){
	//Acceso a la Base de datos Local
	var db = window.openDatabase(nombre, //Nombre de la BD
	"1.0",  //Version de la BD
	nombre, //Nombre a mostrar
	tamano); //Tamaño de la BD que se piensa utilizar
	
	return bd;
	}
	
//Se quito el codigo de la función y se envio a archivos.js	

	
function crearTabla(tx,bd,campos) {
     tx.executeSql('DROP TABLE IF EXISTS '+bd+'');
	 
     tx.executeSql('CREATE TABLE IF NOT EXISTS '+bd+' ('+campos+')');
}


	
function almacenarBD(nombre,valor){
	
        window.localStorage.setItem(nombre, valor);
	}
	
function obtenerBD(nombre){
	
        window.localStorage.setItem(nombre);
	}
	
function isLogin(){
	if(obtenerBD('nombre')!=undefined && obtenerBD('dispId')!=undefined)
		pgAlert(nombre,"Ok");
	else
		pgAlert(nombre,"No")
	
	}
