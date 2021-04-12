
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
    $('#meal').html("<img src='https://media.giphy.com/media/M9OowyXcTJkOlkurIT/giphy.gif' width='300px'/>");
    
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
                 
                display +="<h2>"+ recipe[i].strMeal+"</h2>";
                display +="<img src='" + recipe[i].strMealThumb + "' width ='300px'/>";
                display +="<p>"+ recipe[i].strInstructions +"</p>";
                  

             content.html(display);
        }
        


    }
})


}
