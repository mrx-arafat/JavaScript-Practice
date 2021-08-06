function arrayTotal(arr) {
  let sum = 0;

  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
    sum = sum + arr[i];
  }
  return sum;
}
const total = arrayTotal([10, 20, 30, 40, 50]);

console.log("sum is =", total);
