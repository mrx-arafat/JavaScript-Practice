//skipping all even number
for (var i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 2 == 0) {
    continue;
  }
  console.log(i + " odd");
}
