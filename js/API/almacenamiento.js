// Almacenamiento

function iniciarBD(){
	vardb = window.openDatabase("Database","1.0","HotelR", 200000);
	db.transaction(function(tx){
		ts.executeSql('CREATE TABLE IF NOT EXIST historial(hId unique, fecha, habitaciones, personas, estancia');
	},function(err){
		alert(err.code);
		},function(){
		alert('ok');
		});
}
