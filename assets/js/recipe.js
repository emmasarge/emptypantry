function getsource(id){
$.ajax ({
url:"https://api.spoonacular.com/recipes/information?apiKey=db254b5cd61744d39a2deebd9c361444",
success: function(res) {

document.getElementById("sourceLink").innerHTML=res.sourceUrl
document.getElementById("sourceLink").href=res.sourceUrl
}
});
}
function getRecipe(q) {
$.ajax ({
url:"https://api.spoonacular.com/recipes/search?apiKey=db254b5cd61744d39a2deebd9c361444&number=1&query="+q,
success: function(res) {

document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"' width='400' /><br>Ready in "+res.results[0].readyInMinutes+" minutes"
getsource(res.results[0].id)
}
});
}
