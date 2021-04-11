const searchBtn = document.getElementById('recipe-button');
const recipeOptions = document.getElementById('meal');
const mealDetailsContent = document.getElementById('recipeModal');



// event listeners
searchBtn.addEventListener('click', getRecipeOptions);
recipeOptions.addEventListener('click', getRecipe);
mealDetailsContent.addEventListener('click', getMealRecipe)

// get meal list that matches with the ingredients
function getRecipeOptions(){
    let ingredientSearch = document.getElementById('search').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientSearch}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div id="meal">
                    <div class="recipe-info" data-id = "${meal.idMeal}">
                    <h2 class="recipe-name">${meal.strMeal}</h2>
                  
                    </div>
                    <div class="recipe-img">
                    <img  src="${meal.strMealThumb}" alt="recipe">
                    </div>
                    <p>${meal.strSource}</p>
                   
                
                </div> 



                
                <a href="" id="sourceLink"></a>
        
            </div>
                 <button id="recipeModal" class = "recipe-btn" a href = "#">Recipe Details</button>
        </div>
        
                `;
            });
            recipeOptions.classList.remove('notFound');
        } else {
            html = `Sorry, we cannot find a recipe with ${ingredientSearch}!`;
            recipeOptions.classList.add('notFound');
        }

        recipeOptions.innerHTML = html;
    });
}

function getRecipe(e){
   return false;
    if(e.target.classList.contains('recipe-details')){
        let ingredientData = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredientData.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipe(data.meals));
    }
}

// create a modal
function getMealRecipe(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
         <h3 class= "recipe-header">${meal.strMeal}</h3>
    <h4>Instructions:</h4>
            <p>${meal.strInstructions}</p>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
} 
var modal = document.getElementById("popUp");
var btn = document.getElementById("recipeModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}