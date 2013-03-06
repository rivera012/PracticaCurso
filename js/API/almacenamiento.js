// Almacenamiento

function iniciarBD(){
	vardb = window.openDatabase("Database","1.0","HotelR", 200000);
	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXIST historial(hId unique, fecha, habitaciones, personas, estancia');
		tx.executeSql('CREATE TABLE IF NOT EXIST reserva(hId unique, fecha, habitaciones, personas, estancia');
	},function(err){
		alert(err.code);
		},function(){
		alert('ok');
		});
}
