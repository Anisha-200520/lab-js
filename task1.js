// Simple function with fixed parameters
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Anisha");

// Function with arbitrary number of arguments using rest operator
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10