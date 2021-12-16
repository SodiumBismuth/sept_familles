function sendanswers():
	let n = 0
	if document.getElementById("v1").checked {
		document.getElementById("RQ1") = "Bonne réponse !"
		n++
	}
	else {
		document.getElementById("RQ1") = "Mauvaise réponse..."
	}
	if document.getElementById("v2").checked {
		document.getElementById("RQ2") = "Bonne réponse !"
		n++
	}
	else {
		document.getElementById("RQ2") = "Mauvaise réponse..."
	}
	if document.getElementById("Q3").selectedIndex == 2 {
		document.getElementById("RQ3") = "Bonne réponse !"
		n++
	}
	else {
		document.getElementById("RQ3") = "Mauvaise réponse..."
	}
	if document.getElementById("Q4").selectedIndex == 5 {
		document.getElementById("RQ4") = "Bonne réponse !"
		n++
	}
	else {
		document.getElementById("RQ4") = "Mauvaise réponse..."
	}
	if document.getElementById(""). {
		document.getElementById("RQ5") = "Bonne réponse !"
		n++
	}
	else {
		document.getElementById("RQ5") = "Mauvaise réponse..."
	}
	if document.getElementById("2").checked and document.getElementById("4").checked {
		document.getElementById("RQ6") = "Bonne réponse !"
		n++
	}
	else {
		document.getElementById("RQ6") = "Mauvaise réponse..."
	}
	document.getElementById("NBR") = "Vous avez " + n + " bonnes réponses sur 6 !"
	