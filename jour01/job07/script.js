function jourtravaille(date){
	
	var f1 = new Date(2020, 01, 01)
	var f2 = new Date(2020, 04, 13)
	var f3 = new Date(2020, 05, 01)
	var f4 = new Date(2020, 05, 08)
	var f5 = new Date(2020, 05, 21)
	var f6 = new Date(2020, 06, 01)
	var f7 = new Date(2020, 07, 14)
	var f8 = new Date(2020, 08, 15)
	var f9 = new Date(2020, 11, 01)
	var f10 = new Date(2020, 11, 11)
	var f11 = new Date(2020, 12, 25)

	
	var DayFree = true

	
	feries = [f1, f2, f3, f4,f5, f6, f7, f8, f9, f10, f11]

	
	var dt = new Date(annee, mois, jour, 00, 00, 00)

	//recherche des jours férié
	for(i = 0; i < feries.length; i++){
		if(dt.getTime() === feries[i].getTime()){
			console.log("Le " + jour +" "+ mois +" "+ annee + " est un jour férié")
			DayFree = false
		}
	}

	//recherche des week ends
	if(dt.getDay() == 5 || dt.getDay() == 6){
		console.log("Non, " + jour +" "+ mois +" "+ annee + " est un week-end")
		DayFree = false
	}

	//si aucune correspondance, le jour est un jour de travail
	if(DayFree == true){
		console.log("Oui, " + jour +" "+ mois +" "+ annee + " est un jour travaillé")
	}
}

//input de la date
const annee = prompt("entrez l'année")
const mois = prompt("entrez le mois")
const jour = prompt("entrez le jour")

jourtravaille()