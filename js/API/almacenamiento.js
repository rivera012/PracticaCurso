// Almacenamiento

function iniciarBD(){
	vardb = window.openDatabase("Database","1.0","HotelR", 200000);
	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXIST historial(hId unique, fecha, habitaciones, personas, estancia');
		tx.executeSql('CREATE TABLE IF NOT EXIST reserva(hId unique, fecha, habitaciones, personas, estancia');
		tx.executeSql('DELETE FROM reserva WHERE rID=1');
	},function(err){
		alert(err.code);
		},function(){
		alert('ok');
		});
}

function leeHistorial(){
	accesoBD().transaction(function(tx){
		tx.executeSql('SELECT * FROM historial',[],
		function(tx1,results){
			for(i=0; i< results.rows.length;i++){
				
				alert(results.rows.item(i).hId);
			}
			
		},function(err){
		pgAlert('Error ase de Datos', err.code);
});
},function(err){
	pgAlert('Error Base de Datos',err.code);
});
}
