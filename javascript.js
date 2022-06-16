// Switch statement

// switch (expression) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
//   case value3:
//     statement3;
//     break;
//   default:
//     statement;
// }

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

// Ternary Operator

// condition ? exprIfTrue : exprIfFalse;

const age = 21;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 21 ? "Wine" : "Water";
console.log(drink);

// same program using if statement
let drink2;
if (age >= 21) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);


// Function calling another function

function cutFruitPieces(fruit) {
  return fruit *4
}

function fruitProcessor( apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges)
  const juices = `Juice with ${applePieces}` pieces of apple and ${orangePieces} pieces of orangePieces.
  return juices;
}

console.log(fruitProcessor(2,3))