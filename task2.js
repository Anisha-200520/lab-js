const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

products.forEach(({ name, price }) => {
  console.log(`${name} costs ₹${price}`);
});
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(10, 20, 30)); 
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); 

const original = { a: 1 };
const clone = { ...original, b: 2 };
console.log(clone); 
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}
greet({ name: "anisha", age: 19 });