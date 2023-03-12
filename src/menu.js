
function generateMenuCard(){
    const container=document.createElement("div");
    container.className="menu-container";

    const title=document.createElement("div");
    title.className="menu-title";
    title.textContent="Meals";

    const mealsContainer=document.createElement("div");
    mealsContainer.className="menu-meals-container";

    
    
    mealsContainer.appendChild(createMeal("Salsiccia","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"));
    mealsContainer.appendChild(createMeal("Gamberi","Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"));
    mealsContainer.appendChild(createMeal("Pepe","Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"));
    mealsContainer.appendChild(createMeal("Disgustoso","Tomato sauce, Bacon, Pineapple, Olives, Basil"));
    mealsContainer.appendChild(createMeal("Colorato","Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"));
    mealsContainer.appendChild(createMeal("Pomodoro","Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"));
    mealsContainer.appendChild(createMeal("Crema","White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"));
    mealsContainer.appendChild(createMeal("Carne","Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"));
    
    container.appendChild(title);
    container.appendChild(mealsContainer);
    return container;

}


function createMeal(title,description){
    const meal=document.createElement("div");
    meal.className="menu-meal";
    
    const mealTitle=document.createElement("div");
    mealTitle.className="menu-meal-title";
    mealTitle.textContent=title;
    
    const mealDescription=document.createElement("div");
    mealDescription.className="menu-meal-description";
    mealDescription.textContent=description;

    meal.appendChild(mealTitle);
    meal.appendChild(mealDescription);

    return meal;
}

export {generateMenuCard};