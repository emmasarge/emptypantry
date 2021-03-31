const searchBtn = document.getElementById('search-btn');
const recipeList = document.getElementById('recipe');
const recipeDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getRecipeList);
recipeList.addEventListener('click', getRecipe);
recipeCloseBtn.addEventListener('click', () => {
    recipeDetailsContent.parentElement.classList.remove('showRecipe');
});


// recipes that match text-input ingredients
function getRecipeList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "recipe-item" data-id = "${recipe.idMeal}">
                        <div class = "recipe-img">
                            <img src = "${recipe.strMealThumb}" alt = "food">
                        </div>
                        <div class = "recipe-name">
                            <h3>${recipe.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            recipeList.classList.remove('notFound');
        } else{
            html = `We couldn't find anything with ${searchInputTxt} in our database!`;
            recipeList.classList.add('notFound');
        }

        recipeList.innerHTML = html;
    });
}


// get recipe of the meal
function getRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

// create a modal
function recipePopup(recipe){
    console.log(recipe);
    recipe = recipe[0];
    let html = `
        <h2 class = "recipe-title">${recipe.strMeal}</h2>
        <p class = "recipe-category">${recipe.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${recipe.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${recipe.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${recipe.strYoutube}" target = "_blank">Watch Recipe Video with ${searchInputTxt} </a>
        </div>
    `;
    recipeDetailsContent.innerHTML = html;
    recipeDetailsContent.parentElement.classList.add('showRecipe');
} 