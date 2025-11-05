const numbers = [5, 12, 8, 130, 44];
const filtered = numbers.filter(num => num > 10);
console.log(filtered); 


const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 


const words = ["Hello", "world", "!"];
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence);

const sliced = numbers.slice(1, 4);
console.log(sliced); 


const items = ["a", "b", "c", "d"];
items.splice(2, 1, "x", "y"); 
console.log(items); 


const arr1 = [1, 2];
const arr2 = [3, 4];
const clone = [...arr1];
const merged = [...arr1, ...arr2];
console.log(clone);  
console.log(merged); 