function sommenombrespremiers(num1, num2){
	var isnum1prime = true
	var isnum2prime = true

	//boucle pour num1
	for(let i = 2; i < num1; i++){
		if(num1 % i == 0){
			isnum1prime = false
			console.log("le nombre n'est pas premier")
			break
		}
	}

	//boucle pour num2
	for(let i = 2; i < num2; i++){
		if(num2 % i == 0){
			isnum2prime = false
			console.log("le nombre n'est pas premier")
			break
		}
	}

	//si les deux nombres sont premiers, on additionne
	if(isnum1prime && isnum2prime){
		const z = num1 + num2
		console.log(z)
	}
	else{
		return "false"
	}
}

const x = parseInt(prompt("Entrez un nombre entier" ))
const y = parseInt(prompt("Entrez un nombre entier"))

sommenombrespremiers(x, y)