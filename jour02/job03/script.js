
document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("#button");
    let paraGraphe = document.querySelector("#compteur");
    let nombre = paraGraphe.innerHTML;
    console.log(nombre);
    console.log(btn);
    console.log(paraGraphe);
  
    function addDone() {
      console.log("verif");
  
      nombre++;
      paraGraphe.innerHTML = nombre;
    }
  
    btn.addEventListener("click", () => {
      addDone();
    });
  });