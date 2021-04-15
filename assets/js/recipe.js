
function recipeResults(){
    var meal = $('#search').val();
    if (meal.length ==0) {
        alert("Please type an ingredient for your recipe search.");
    }
    else {
        recipeSearch(meal);

    }
}

function recipeSearch (mealname) {
    var api ="https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealname ;
    $('#meal').html("<img src='https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif' width='100px'/>");
    
    var content = $('#meal');

    $.getJSON(api,function(data) {
        var recipe = data.meals;

        console.log(recipe);

        var display="";

        if (recipe==null) {
            
            $('#meal').html(`<p>Sorry, we cannot find a recipe with ${mealname} !</p>`);
        }
        else {
             for (var i=0; i < recipe.length; i++) {
                
                display +=`<div id="recipe-wrapper">
                <h2> ${recipe[i].strMeal}</h2>;
               <img src=${recipe[i].strMealThumb} width ='300px'/>
               <details ontoggle="showMethod()">
                <summary>Click here for the recipe!</summary>
             <p id="recipe"  >${recipe[i].strInstructions} </p>
              </details>
               </div>
               `
               ;
               
             content.html(display);
         

 
           
        }
      


    }
})


}

function showMethod(){
   $("#recipe").css("font-weight", "400");

}

function betaMessage () {
    let message = document.querySelector(".recipe-sub")
    let recipePage = prompt("Our recipe database is still being developed, currently you can enter 1 ingredient at a time. If you are happy with this, type 'yes' and search for recipes to your heart's delight 🥦! If you are not, type 'no' to send us an email 💌.");
    if (recipePage.toLowerCase() === "no") {
          location.href = "https://emmasarge.github.io/emptypantry/contact.html";
        } else {
          message.innerHTML =
            "Enjoy your recipe search!";
        }
      }

window.addEventListener("load", betaMessage);