// Constructor function
function Animal(name) {
  this.name = name;
}

// Add method to prototype
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

// Create an instance
const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound

// Modify prototype - add new method
Animal.prototype.walk = function () {
  console.log(`${this.name} is walking.`);
};

dog.walk(); // Buddy is walking

// View prototype chain
console.log(Object.getPrototypeOf(dog)); // Logs Animal prototype

// Change prototype (not common practice but possible)
const newProto = {
  run() {
    console.log(`${this.name} is running!`);
  }
};

Object.setPrototypeOf(dog, newProto);

dog.run(); // Buddy is running!
