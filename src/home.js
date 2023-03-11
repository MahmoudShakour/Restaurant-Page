import Photo from "./images/photo.png"

function generateHomeCard(){

    const card=document.createElement("div");
    card.className="home-card";

    const cardParagraphOne=document.createElement("p");
    cardParagraphOne.textContent="The Best in your country";
    cardParagraphOne.className="card-paragraph";
    
    
    const cardParagraphTwo=document.createElement("p");
    cardParagraphTwo.textContent="Made with passion since 2001";
    cardParagraphTwo.className="card-paragraph";

    const myPhoto=new Image();
    myPhoto.src=Photo;
    myPhoto.className="card-photo";

    const cardParagraphThree=document.createElement("p");
    cardParagraphThree.textContent="Order online or visit us!";
    cardParagraphThree.className="card-paragraph";

    card.appendChild(cardParagraphOne);
    card.appendChild(cardParagraphTwo);
    card.appendChild(myPhoto);
    card.appendChild(cardParagraphThree);

    return card;
}

export {generateHomeCard};