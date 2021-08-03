// remember this four keywords
// switch, case, break, default

var day = "mon"; // here I am using string type. also can be use number

switch (day) {
  case "sat":
    console.log("semi working day");
    break;
  case "sun":
  case "fri":
    console.log("Holiday");
    break;

  case "mon":
  case "tue":
  case "wed":
    console.log("8hr working day");
    break;

  case "thu":
    console.log("5hr working day");
    break;

  default:
    console.log("invalid input");
}
