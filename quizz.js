let suivantBtn = document.querySelector("#suivant");
let image = document.querySelector("img");
let question = document.querySelector("#question")
let reponse = document.querySelectorAll(".reponse");



const liste_carte = 
[{src:"img/intro-simpson.webp",question:"Qui est le créateur des simpson ?",reponse:["Justin Roiland","Matt Groening","Seth MacFarlane","Dan Harmon"]},
{src:"img/springfield.jpeg",question:"Comment s'appelle la ville des Simpson ?",reponse:["Springfield","Monaco","Los Santos","Spielberg"]},
{src:"img/homer.jpeg",question:"Comment s'appelle le père de la famille ?",reponse:["Homer","Homère","Oh mère !","Moe-Mere"]}
]

let carte_courante = 0;


//Load permet de jouer une fonction à l'ouverture de la page
window.addEventListener("load",(event)=>{
    image.setAttribute("src",liste_carte[carte_courante].src);
    question.textContent = liste_carte[carte_courante].question;
    let i = 0;
    reponse.forEach((element)=>{
        element.textContent = liste_carte[carte_courante].reponse[i++]
    })
    i = 0;
    carte_courante++;
})


suivantBtn.addEventListener("click",()=>{
    image.setAttribute("src",liste_carte[carte_courante].src);
    question.textContent = liste_carte[carte_courante].question;
    let i = 0;
    reponse.forEach((element)=>{
        element.textContent = liste_carte[carte_courante].reponse[i++]
    })
    i = 0;
    carte_courante++;
})