//Archivos

function subirArchivo(ruta){
	var ft = new FileTransfer();

	ft.upload(ruta,
		"http://igitsoft.com/pgtest.php",
		function(result) {
			pgAlert('Imagen subida',result.responseCode+'\n'+result.bytesSent);
			
			function transacciones(bd,ejecuciones){
		db.transaction(accesoBD('test',100000),function(tx){
			crearTabla(tx,'Reserva','rId,fecha,habitaciones,personas,estancia')}, alert("Error processing SQL: "+err), alert("success!"));
	}
		},
	
		function(error) {
			pgAlert('Error al subir imagen',error.code);
		},
		{ fileKey:'archivo', fileName:'cliente.jpg' }
	);   
}