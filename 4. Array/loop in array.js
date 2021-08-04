var num = [4, 33, 4, 43, 12, 43];

//sum of these elements

var sum = 0;

for (
  i = 0;
  i <= num.length - 1;
  i++ //here length is 6  need to loop 6 times // i<num.length or i<6   : 0,1,2,3,4,5= 6 times // or we can think i<=num.length-1
) {
  console.log(num[i]);

  sum = sum + num[i];
}

console.log("sum is = " + sum);
