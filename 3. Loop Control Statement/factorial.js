var fact = 1;

var i = 1;
while (i <= 5) {
  // 5! = 1x2x3x4x5 = 120
  console.log(i);
  i++;
  fact = fact * i;
}

console.log(fact);
