// Switch statement

const day = "monday";
switch (day) {
  case "monday": // day === monday
    console.log("Go to class");
    break;
  case "tuesday":
    console.log("Go to partime job");
    break;
  case "wednesday":
    console.log("apply for jobs");
  case "thursday":
  case "friday":
    console.log("go to evning classes");
    break;
  default:
    console.log("Not a valid day");
}

// it will continue executing, every cases until it reaches a break statement.
