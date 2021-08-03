// A+ (80-100)
// A (70-79)
// A- (60-69)
// B (50-59)
// F (<50)
var marks = 100;

if (marks >= 80 && marks <= 100) {
  console.log("A+");
} else if (marks >= 70 && marks <= 79) {
  console.log("A");
} else if (marks >= 60 && marks <= 69) {
  console.log("A-");
} else if (marks >= 50 && marks <= 59) {
  console.log("B");
} else if (marks < 50) {
  console.log("Fail");
} else {
  console.log("invalid marks");
}
