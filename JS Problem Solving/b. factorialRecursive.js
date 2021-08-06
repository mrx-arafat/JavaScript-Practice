function factorialRecursive(num) {
  if (num == 0) {
    return 1;
  }
  // 0! =1  so return 1

  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(4));
