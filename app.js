const getDataForm = document.querySelector('.get-data-form');
const dataInput = document.querySelector('#getData');
const drinksContainer = document.querySelector('.drinks-container');


getDataForm.addEventListener('submit', displayDrinkData);


function displayDrinkData(e) {
   e.preventDefault();
   const drink = dataInput.value;
   getDrinkData(drink);

}

function createDrinkData(data) {
   const wrapperDiv = document.createElement('div');
   const img = document.createElement('img');
   const drinkName = document.createElement('p');
   const drinkType = document.createElement('p');
   const ingredientOne = document.createElement('p');
   const instructions = document.createElement('p');

   wrapperDiv.classList.add('wrapper');

   wrapperDiv.appendChild(img);
   wrapperDiv.appendChild(drinkName);
   wrapperDiv.appendChild(drinkType);
   wrapperDiv.appendChild(ingredientOne);
   wrapperDiv.appendChild(instructions);
   drinksContainer.appendChild(wrapperDiv);

   img.src = data.strDrinkThumb;
   drinkName.textContent = data.strDrink;
   drinkType.textContent = data.strAlcoholic;
   ingredientOne.textContent = data.strIngredient1;
   instructions.textContent = data.strInstructions;
}

async function getDrinkData(drink) {
   return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then(response => response.json())
      .then(data => {
       const drinks = data.drinks;
       drinks.map(d => createDrinkData(d)); 
      });
}

