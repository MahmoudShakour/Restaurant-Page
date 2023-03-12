import "./style.css"
import {generateHomeCard} from "./home";
import {generateContactCard} from "./contact";
import {generateMenuCard} from "./menu";

const home=document.querySelector(".home");
home.addEventListener("click",()=>{
    addelement(generateHomeCard());
});


const contact=document.querySelector(".contact");
contact.addEventListener("click",()=>{
    addelement(generateContactCard());
});


const menu=document.querySelector(".menu");
menu.addEventListener("click",()=>{
    addelement(generateMenuCard());
});


function addelement(element){
    const content=document.querySelector(".content");
    while(content.children[0]!==undefined)
    content.removeChild(content.children[0]);

    content.appendChild(element);
}

function main(){
    document.getElementById("home").click();
}

main();