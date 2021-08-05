function getFactorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    console.log(i);
    fact = fact * i;
  }
  return fact;
}

console.log(getFactorial(5));
