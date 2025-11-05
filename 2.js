// Define a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create instances and invoke methods
const benisha = new Person("Benisha", 21);
benisha.greet();

// Demonstrate what happens if 'this' is lost
const greetFn = benisha.greet;
greetFn(); // 'this' is undefined or refers to global object

// Fix using bind
const boundGreet = benisha.greet.bind(benisha);
boundGreet(); // Works correctly