let button = document.querySelector("button");
let springfieldImg = document.querySelector("img")
let container = document.querySelector(".container")
let answer;
let homerImg = document.createElement("img");
homerImg.setAttribute("src","img/homer.jpeg");
homerImg.setAttribute("width","700px");


let screen = document.createElement("div");
screen.setAttribute("id","screen");
screen.textContent = "Comment s'appelle le chauve ?";

button.addEventListener("click",(event)=>{
    container.removeChild(springfieldImg);
    container.removeChild(button);
    console.log(button);

    setTimeout(()=>{
        container.appendChild(homerImg);
    container.appendChild(screen);},2000);

    setTimeout(()=>{
    
        answers(["Homer","Bart","Moe","Barney"]);

    },2000)
});



function answers(choix){
    let answerWrapper = document.createElement("div");
    answerWrapper.setAttribute("class","wrapper");
   let row
    for (let i = 0; i < 4; i++){
        if (i % 2 == 0){
            row = document.createElement("div");
            row.setAttribute("class","row");
            answerWrapper.appendChild(row);
        }
        answer = document.createElement("div");
        answer.setAttribute("class","answer");
        answer.textContent = choix[i];
        row.appendChild(answer);
       
    }
    container.appendChild(answerWrapper)
}

