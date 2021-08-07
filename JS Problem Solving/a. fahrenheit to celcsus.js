function fahrenheitToCelsius(tempFahrn) {
  // Take whatever temperature the function is handed, do some math and return it.
  const celsius = (tempFahrn - 32) * (5 / 9);

  return celsius;
}

console.log(fahrenheitToCelsius(98));
