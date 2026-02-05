let suivantBtn = document.querySelector("#suivant");
let image = document.querySelector("img");
let question = document.querySelector("#question")
let reponse = document.querySelectorAll(".reponse");

console.log(reponse);


const liste_carte = 
[{src:"img/springfield.jpeg",question:"Comment s'appelle la ville des Simpson ?",reponse:["Springfield","Monaco","Los Santos","Spielberg"]},
{src:"img/homer.jpeg",question:"Comment s'appelle le père de la famille ?",reponse:["Homer","Homère","Oh mère !","Moe-Mere"]}
]

let carte_courante = 0;

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