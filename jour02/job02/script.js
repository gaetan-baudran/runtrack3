document.addEventListener("DOMContentLoaded",()=>{
     let btn =  document.getElementById("button");
     let article = document.createElement("article");
     article.textContent = "L'important n'est pas la chute, mais l'atterrissage";

  function showhide(){

    let body = document.querySelector("body");
    body.appendChild(article);
    if(article.style.display === "none"){
        article.style.display = "block";
    } else {
        article.style.display ="none"
    }


  }

btn.addEventListener("click",showhide);

})