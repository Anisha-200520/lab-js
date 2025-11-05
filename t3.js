// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
export default function multiply(a, b) {
  return a * b;
}
// Import default and named exports
import multiply, { add, subtract } from './mathUtils.js';

console.log("Addition:", add(5, 3));        // 8
console.log("Subtraction:", subtract(9, 4)); // 5
console.log("Multiplication:", multiply(2, 3)); // 6
