document.getElementById('REP').onclick = function sendanswers(){
	let n = 0;
	if (document.getElementById("v1").checked) {
		document.getElementById("RQ1").innerHTML = "Bonne réponse !";
		document.getElementById("RQ1").style = "color:green";
		n++
	}
	else {
		document.getElementById("RQ1").innerHTML = "Mauvaise réponse...";
		document.getElementById("RQ1").style = "color:darkred"
	}
	if (document.getElementById("v2").checked) {
		document.getElementById("RQ2").innerHTML = "Bonne réponse !";
		document.getElementById("RQ2").style = "color:green";
		n++
	}
	else {
		document.getElementById("RQ2").innerHTML = "Mauvaise réponse...";
		document.getElementById("RQ2").style = "color:darkred"
	}
	if (document.getElementById("Q3").selectedIndex == 2) {
		document.getElementById("RQ3").innerHTML = "Bonne réponse !";
		document.getElementById("RQ3").style = "color:green";
		n++
	}
	else {
		document.getElementById("RQ3").innerHTML = "Mauvaise réponse...";
		document.getElementById("RQ3").style = "color:darkred"
	}
	if (document.getElementById("Q4").selectedIndex == 5) {
		document.getElementById("RQ4").innerHTML = "Bonne réponse !";
		document.getElementById("RQ4").style = "color:green";
		n++
	}
	else {
		document.getElementById("RQ4").innerHTML = "Mauvaise réponse...";
		document.getElementById("RQ4").style = "color:darkred"
	}
	if (document.getElementById("Q5").value == "1960") {
		document.getElementById("RQ5").innerHTML = "Bonne réponse !";
		document.getElementById("RQ5").style = "color:green";
		n++
	}
	else {
		document.getElementById("RQ5").innerHTML = "Mauvaise réponse...";
		document.getElementById("RQ5").style = "color:darkred"
	}
	if (document.getElementById("2").checked && document.getElementById("4").checked) {
		document.getElementById("RQ6").innerHTML = "Bonne réponse !";
		document.getElementById("RQ6").style = "color:green";
		n++
	}
	else {
		document.getElementById("RQ6").innerHTML = "Mauvaise réponse...";
		document.getElementById("RQ6").style = "color:darkred"
	}
	document.getElementById("NBR").innerHTML = "Vous avez " + n + " bonnes réponses sur 6 !"
}

