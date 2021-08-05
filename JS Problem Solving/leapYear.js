var year = 2000;
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
  console.log("Yes,Leap-Year");
} else {
  console.log("No,Not Leap-Year");
}
