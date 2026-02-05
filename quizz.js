
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
{src:"img/homer.jpeg",question:"Comment s'appelle le père de la famille ?",reponse:["Homer","Homère","Oh mère !","Moe-Mere"],bonne_reponse:"Homer"},
{src:"img/apu.jpg",question:"Comment s'appelle le propriètaire du Kwik-E-Mart?",reponse:["Apu Nahasapeemapetilon","Apu Gopalaswami","Apu Ramanathan","Apu Ramachandran"],bonne_reponse:"Apu Nahasapeemapetilon"},
{src:"img/mr_burns.jpg", question:"Quel est le nom complet du patron d'Homer ?", reponse:["Montgomery Burns","Charles Montgomery Burns","Montgomery C. Burns","Burns Charles"], bonne_reponse:"Charles Montgomery Burns"},
{src:"img/ned_flanders.avif", question:"Comment s'appelle le voisin des Simpson ?", reponse:["Ned Flanders","Rod Flanders","Todd Flanders","Cletus Spuckler"], bonne_reponse:"Ned Flanders"},
{src:"img/milhouse.webp", question:"Comment s'appelle le meilleur ami de Bart ?", reponse:["Nelson Muntz","Milhouse Van Houten","Ralph Wiggum","Martin Prince"], bonne_reponse:"Milhouse Van Houten"},
{src:"img/lisa.png", question:"Quel instrument joue Lisa Simpson ?", reponse:["Piano","Guitare","Saxophone","Flûte"], bonne_reponse:"Saxophone"},
{src:"img/snowball.webp", question:"Quel est le nom du chat de la famille Simpson ?", reponse:["Snowball I","Snowball II","Snowball III","Santa’s Little Helper"], bonne_reponse:"Snowball II"},
{src:"img/santa.webp", question:"Quel est le nom du chien des Simpson ?", reponse:["Santa’s Little Helper","Snowball","Blinky","Stampy"], bonne_reponse:"Santa’s Little Helper"},
{src:"img/moes.avif", question:"Quel est le nom du bar où Homer passe souvent ses soirées ?", reponse:["The Drunken Clam","Moe’s Tavern","Krusty Burger","Springfield Bar"], bonne_reponse:"Moe’s Tavern"},
{src:"img/nelson.avif", question:"Quel personnage est souvent présenté comme le harceleur à l’école ?", reponse:["Bart Simpson","Nelson Muntz","Milhouse Van Houten","Ralph Wiggum"], bonne_reponse:"Nelson Muntz"},
{src:"img/leftorium.avif", question:"Comment s’appelle le magasin spécialisé dans les produits pour gauchers ?", reponse:["Leftorium","Rightorium","Springfield Goods","Flanders Shop"], bonne_reponse:"Leftorium"},


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