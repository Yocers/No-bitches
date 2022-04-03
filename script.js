const analiza = () => {
	const imie = parseInt(imiex.value);
	const nazwisko = parseInt(nazwiskox.value);
	const wiek = parseInt(wiekx.value);
	
	var alert = 0;
	
	var chb1 = 0;
	var chb2 = 0;
	var chb3 = 0;
	var madio = 0;
	
	if(document.getElementById("radio1").checked == true){
		madio = 1;
	}
	else if(document.getElementById("radio2").checked == true){
		madio = 1;
	}
	else if(document.getElementById("radio3").checked == true){
		madio = 1;
	}
	
	if(document.getElementById("chb1").checked == true){
		chb1 = 1;
	}
	if(document.getElementById("chb2").checked == true){
		chb2 = 1;
	}
	if(document.getElementById("chb3").checked == true){
		chb3 = 1;
	}
	
	if(imie == null) {
		alert = 1;
	}
	
	if(nazwisko == null) {
		alert = 1;
	}
	
	if(wiek == null) {
		alert = 1;
	}
	
	if(chb1 == 0) {
		alert = 1;
	}
	
	if(chb2 == 0) {
		alert = 1;
	}
	
	if(chb3 == 0) {
		alert = 1;
	}
	
	if(madio == 0) {
		alert = 1;
	}
	if(alert == 1){
		console.log("nie podan");
		
	}
	if(alert == 0){
		window.open("HAHA.jpg", width=416, height=450);
	}
}