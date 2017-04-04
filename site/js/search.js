var searches = [];
var elements = document.querySelectorAll(".search");

 for(var i = 0; i < elements.length; i++) {
  var current = elements[i];
  searches.push(current.textContent.toLowerCase());
 }

function recent() {
  var input = document.querySelector("input").value.toLowerCase();
  document.querySelector(".search_result").innerHTML = "";
  for (i = 0; i < searches.length; i++) {
    if (searches[i].includes(input) && input.length > 1) {
      var tiles = document.createElement("div");
      document.querySelector(".search_result").appendChild(tiles);
      tiles.className = "search_tiles";
      var print = document.createTextNode(searches[i]);
      tiles.appendChild(print);
    }
  }
}
setInterval(recent, 200);

function search() {
  var input = document.querySelector("input").value;
  console.log(input);

  if (searches.includes(input)) {
    window.location.assign(input + ".html");
  }
}

$( ".search_result" ).click(function() {
  var input = $(this).attr('.search_result');
  console.log(input);

  if (searches.includes(input)) {
    window.location.assign(input + ".html");
  }
});
