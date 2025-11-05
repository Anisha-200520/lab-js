//if statement

let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}


//if-else 

let score = 45;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//multiple condition with else if

let marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}


//switch

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}