function deliveryCost(numOfProduct) {
  //input validation
  if (numOfProduct < 0) {
    return "Input is Negative";
  }
  if (typeof numOfProduct != "number") {
    return "Input is not a number";
  }
  //condition check
  if (numOfProduct <= 100) {
    const total = numOfProduct * 100;
    return total;
  } else if (numOfProduct <= 200) {
    // here for first 100=> 100*100
    const total = 100 * 100 + (numOfProduct - 100) * 80;
    return total;
  } else if (numOfProduct > 200) {
    //here for second 100 => 100*80
    const total = 100 * 100 + 100 * 80 + (numOfProduct - 200) * 50;
    return total;
  }
}
console.log(deliveryCost(220));
//delivery cost for 220 products: 10000+8000+1000=19000
