var searches = ["logitech fury"];
var elements = document.querySelectorAll(".search");

 for(var i = 0; i < elements.length; i++) {
  var current = elements[i];
  searches.push(current.textContent.toLowerCase());
 }

/* Funktion för att visa sökresultat när minst 2 tecken skrivits in i
sökfälet. */
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

/* Funktion för att komma till sökresultat när man har sökt
på en produkt. */
function search() {
  var input = document.querySelector("input").value;
  console.log(input);

  if (searches.includes(input)) {
    window.location.assign(input + ".html");
  }
}

/* Funktion för att komma till vald sida efter att man klickat på en
produktkategori i navigeringsfältet. */
$("h3").click(function() {
  window.location.assign($(this).html() + "Kat.html");
});

$(".button").click(function () {
  window.location.assign($(this).find(".product_id").html() + "Kund.html");
});
