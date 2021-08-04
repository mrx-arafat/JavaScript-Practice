function bringBurger(taka) {
  console.log("Money I have", taka);
  var burgerPrice = 150;
  var burgerQuantity = taka / burgerPrice;

  return burgerQuantity;
  //I am providing taka in the function and returning Burger
}

var money = 600;
var burger = bringBurger(money);
//store money=taka

console.log("Here you go Mr. Arafat " + burger + " Burger");
