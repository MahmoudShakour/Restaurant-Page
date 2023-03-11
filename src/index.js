import "./style.css"
import {generateHomeCard} from "./home";
import {generateContactCard} from "./contact";

const home=document.querySelector(".home");
home.addEventListener("click",()=>{
    addelement(generateHomeCard());
});


const contact=document.querySelector(".contact");
contact.addEventListener("click",()=>{
    addelement(generateContactCard());
});



function addelement(element){
    const content=document.querySelector(".content");
    while(content.children[0]!==undefined)
    content.removeChild(content.children[0]);

    content.appendChild(element);
}