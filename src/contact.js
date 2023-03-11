import phoneIcon from "./images/phoneIcon.svg";
import homeIcon from "./images/homeIcon.svg";


function generateContactCard(){
    const card=document.createElement("div");
    card.className="contact-card";

    const phoneNumberContainer=document.createElement("div");
    phoneNumberContainer.className="contact-container";

    const phoneNumberIcon=new Image();
    phoneNumberIcon.src=phoneIcon;
    phoneNumberIcon.className="icon";
    
    const phoneNumberParagraph=document.createElement("div");
    phoneNumberParagraph.className="contact-paragraph";
    phoneNumberParagraph.textContent="+20 1062 591 395";

    phoneNumberContainer.appendChild(phoneNumberIcon);
    phoneNumberContainer.appendChild(phoneNumberParagraph);
    
    
    
    
    
    const addressContainer=document.createElement("div");
    addressContainer.className="contact-container";
    
    const addressIcon=new Image();
    addressIcon.src=homeIcon;
    addressIcon.className="icon";

    const addressParagraph=document.createElement("div");
    addressParagraph.className="contact-paragraph";
    addressParagraph.textContent="23 Almarsah-village, dikirnis, mansoura, Egypt";

    addressContainer.appendChild(addressIcon);
    addressContainer.appendChild(addressParagraph);





    const quote=document.createElement("div");
    quote.className="contact-paragraph";
    quote.textContent="We bring soul to the recipe, VISIT US!";

    



    card.appendChild(phoneNumberContainer);
    card.appendChild(addressContainer);
    card.appendChild(quote);

    return card;
}

export {generateContactCard};