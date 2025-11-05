//while loop

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//do-while

let input;
do {
  input = prompt("Enter the number 5:");
} while (parseInt(input) !== 5);
console.log("Correct input!");

//for
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("Sum:", sum);

//nested for
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}