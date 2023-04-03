const body = document.querySelector("body");                        
const form = document.querySelector("form");                        
const select_types = document.querySelector("#select_types");      
const pokemonType = [];



function get_types() {
    fetch("pokemon.json")                                          
        .then((response) => {                                         
            return response.json()
        })
        
        .then((data) => {                                              
            for(let i=0; i<data.length; i++) {                              
                if(pokemonType.includes(String(data[i].type)) === false){      
                    pokemonType.push(String(data[i].type));
                }
            }
            push_select();                                          
        })
}


function push_select() {
    for(let k=0; k < pokemonType.length; k++) {
        option_types = document.createElement("option");
        option_types.textContent = pokemonType[k];
        select_types.append(option_types);
    }
}



form.addEventListener("submit", function (query) {
    query.preventDefault();

    const request = new FormData(form);
    const user_input = [...request];

    fetch("pokemon.json")
        .then((response) => {
            return response.json()
        })
    
        .then((data) => {
            for(let t = 0; t < data.length; t++) {
                if(data[t].type == user_input[2][1]) {
                    const display_request = document.createElement("p");
                    display_request.innerHTML = String(data[t].name.french);
                    body.appendChild(display_request);
                }
            }
            push_select();
        })
});

get_types();
