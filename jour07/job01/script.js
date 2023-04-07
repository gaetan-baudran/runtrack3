// Lien vers le site de La Plateforme
const accueilLink = document.querySelector('.nav-link.active');
accueilLink.addEventListener('click', function() {
    window.location.href = 'https://www.laplateforme.io/';
});
// Créer une liste de citations
const citations = [
    "Le sens étendu désigne l'univers dans son ensemble",
    "Tout ces moments se perdront dans l'oubli comme les larmes sous la pluie.",
    "Je n'ai vu que des choses que vous ne croiriez pas.",
    "Il est temps de mourir.",
    "J'ai vu des choses que vous ne croiriez pas.",
    "Fiabilité de l'empathie, nulle."
];

// Sélectionner le bouton "Rebooter le Monde"
const rebootBtn = document.getElementById("reboot");


rebootBtn.addEventListener("click", function() {
    
    const randomIndex = Math.floor(Math.random() * citations.length);
    
    
    const citation = document.getElementById("citation");
    citation.innerHTML = citations[randomIndex];
});


let contenuJambon = document.querySelector("#contenuJambon")

$("#page1").click(function(){
let page1 = "Il existe plusieurs visions du terme : le monde et la matière,l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison. Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel."
contenuJambon.innerHTML = page1;
});

$("#page2").click(function(){
let page2 = "Le cyberpunk (association des mots cybernétique et punk) est un genre de la science-fiction très apparenté à la dystopie et à la hard science-fiction. Il met souvent en scène un futur proche, avec une société technologiquement avancée (notamment pour les technologies de l'information et la cybernétique).Selon Bruce Sterling, « le courant cyberpunk provient d'un univers où le dingue d'informatique et le rocker se rejoignent, d'un bouillon de culture où les tortillements des chaînes génétiques s'imbriquent. »"
contenuJambon.innerHTML = page2;
});

$("#page3").click(function(){
let page3 = "Les mondes cyberpunks sont empreints de violence et de pessimisme ; ils sont souvent lugubres, parfois ironiquement grinçants ; les personnages sont des antihéros désabusés, cyniques et cupides.Le cyberpunk a depuis essaimé ses thématiques dans de nombreux médias, notamment dans la bande dessinée, le cinéma, la musique, les jeux vidéo et les jeux de rôle."
contenuJambon.innerHTML = page3;
});


