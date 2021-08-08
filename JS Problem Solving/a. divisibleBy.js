for (let i = 1; i <= 50; i++) {
  console.log(i);

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("divisible by both");
  } else if (i % 3 == 0) {
    console.log("divisible by 3");
  } else if (i % 5 == 0) {
    console.log("divisible by 5");
  }
}
