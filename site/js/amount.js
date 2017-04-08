var amount = document.querySelector("#amount_number");
var price = document.querySelector(".product_price");
n = 1;
var startPrice = parseInt(document.querySelector(".product_price").innerHTML);

  $("#plus").click( function functionName() {
    n = n + 1;
    amount.innerHTML = n;
    price.innerHTML = parseInt(price.innerHTML) + startPrice + ":-";
  });
  $("#minus").click( function functionName() {
    if (n == 1) {
      window.location.assign("kundvagn.html");
    }
    n = n - 1;
    amount.innerHTML = n;
    price.innerHTML = parseInt(price.innerHTML) - startPrice + ":-";
  });

// Funktion för att välja antal av samma produkt i kundvagnen.
