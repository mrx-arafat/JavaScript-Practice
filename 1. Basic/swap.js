var a = 5,
  b = 8;
console.log(a, b);

//swaping

var temp = a;

a = b;

b = temp;

console.log(a, b);

//destructuring

[a, b] = [b, a];

console.log(a, b);
