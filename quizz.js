
//reference
let carte = document.querySelector(".carte");
let carte_fin = document.createElement("div");
carte_fin.setAttribute("id","carte-fin");
let suivantBtn = document.querySelector("#suivant");
let image = document.querySelector("img");
let question = document.querySelector("#question")
let conteneur_reponse = document.querySelector(".conteneur-reponse")
let reponse = document.querySelectorAll(".reponse");
let ligne = document.querySelector(".ligne");

//liste
const liste_carte = 
[{src:"img/intro-simpson.webp",question:"Qui est le créateur des simpson ?",reponse:["Justin Roiland","Matt Groening","Seth MacFarlane","Dan Harmon"],bonne_reponse: "Matt Groening"},
{src:"img/springfield.jpeg",question:"Comment s'appelle la ville des Simpson ?",reponse:["Springfield","Monaco","Los Santos","Spielberg"],bonne_reponse:"Springfield"},
{src:"img/homer.jpeg",question:"Comment s'appelle le père de la famille ?",reponse:["Homer","Homère","Oh mère !","Moe-Mere"],bonne_reponse:"Homer"}

]

//variable
let carte_courante = 0;
let touched = false;
let score = 0;


//Load permet de jouer une fonction à l'ouverture de la page
window.addEventListener("load",(event)=>{
    image.setAttribute("src",liste_carte[carte_courante].src);
    question.textContent = liste_carte[carte_courante].question;
    let i = 0;
    reponse.forEach((element)=>{
        element.textContent = liste_carte[carte_courante].reponse[i++]
    })
    i = 0;
    
})


suivantBtn.addEventListener("click",()=>{


    if (carte_courante + 1 >= liste_carte.length){
        document.body.removeChild(carte);
        document.body.removeChild(suivantBtn);
        carte_fin.textContent = `Score: \n${score}/${liste_carte.length}`;
        document.body.appendChild(carte_fin);

    }
    
    
    carte_courante++;
    //reinit touched
    touched = false;



    if (carte_courante >= liste_carte.length){
        console.log("Fin");
    }
    else{

    
    image.setAttribute("src",liste_carte[carte_courante].src);
    question.textContent = liste_carte[carte_courante].question;
    let i = 0;
    reponse.forEach((element)=>{
        element.textContent = liste_carte[carte_courante].reponse[i++]
        // reinit couleur 
        element.style.cssText = "background-color:white;color:black;"
    })
    i = 0;


    }

    

    
})

conteneur_reponse.addEventListener("click",(event)=>{
    
    if (event.target.className == "reponse"){

    if (touched == false){
        if (event.target.textContent == liste_carte[carte_courante].bonne_reponse){
        event.target.style.cssText = "background-color:green;color:white;"
        score++;
        console.log(score);
    }else{
        
        


            event.target.style.cssText = "background-color:red;color:white;"

        setTimeout(()=>{

            reponse.forEach((element)=>{
            if (element.textContent == liste_carte[carte_courante].bonne_reponse ){
                element.style.cssText = "background-color:blue;color:white";
            }
        });

        },250);


        


        

    

    }
    touched = true;

    }
}
})