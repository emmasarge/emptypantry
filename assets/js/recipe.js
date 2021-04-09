
 
function getSource(id){
$.ajax({
url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=3795c28ea918421d906d646b58835c6f",
success: function(res) {

document.getElementById("sourceLink").innerHTML=res.sourceUrl
document.getElementById("sourceLink").href=res.sourceUrl
}
});
}

function getRecipe(q){
$.ajax({
url:"https://api.spoonacular.com/recipes/search?apiKey=3795c28ea918421d906d646b58835c6f&number=1&query="+q,
success: function(res) {
document.getElementById("output").innerHTML+= "<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"' width='400' />"
getSource(res.results[0].id)
}
});
}




let input = document.querySelector('input');
let recipe = document.querySelector('#output');
input.addEventListener('change', function () {
    recipe.textContent = recipe.value;
        });