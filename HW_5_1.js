let coffeType = prompt ("Latte or Americano ?");

function coffeLatte () {
    alert ("Latte recipe: coffe + milk + water");
    alert ("Price: Small - 50 $, Medium  - 100 $, Large - 150 $");
}
function coffeAmericano () {
  alert ("Americano recipe: coffe + water");
  alert ("Price: Small - 20$, Medium  - 25$, Large - 30$");
}

if (coffeType == 'Latte') {
    coffeLatte();

}
else if (coffeType == 'Americano'){
    coffeAmericano();
}