const student = {
  name: "Anisha",
  age: 20,
  displayInfo: function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

student.displayInfo(); 

student.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

student.greet(); 


console.log(student.age); 
student.age = 22;
console.log(student.age); 