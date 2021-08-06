function largestElement(num) {
  let largest = num[0];
  // always set the first index of array as largest/lowest
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);

    if (num[i] > largest) {
      largest = num[i];
    }
  }
  return largest;
}

const ages = [23, 54, -55, -2, 12, 99];
const oldest = largestElement(ages);

console.log("oldest man =", oldest);
