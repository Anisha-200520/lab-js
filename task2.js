let numberType = 42;
let stringType = "Hello";
let booleanType = true;
let nullType = null;
let undefinedType;
let symbolType = Symbol("id");

console.log(typeof numberType);     
console.log(typeof stringType);      
console.log(typeof booleanType);     
console.log(typeof nullType);        
console.log(typeof undefinedType);   
console.log(typeof symbolType);      


let str = "123";
let num = Number(str);
console.log("String to Number:", num, typeof num);

let numToStr = String(456);
console.log("Number to String:", numToStr, typeof numToStr);


console.log("5" - 2);  
console.log("5" + 2); 