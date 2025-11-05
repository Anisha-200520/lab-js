// Define base class
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call parent constructor
    this.course = course;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, studying ${this.course}.`);
  }

  study() {
    console.log(`${this.name} is studying ${this.course}.`);
  }
}

// Create instance and test behavior
const student1 = new Student("Benisha", 21, "Web Development");
student1.greet();      // Overridden method
student1.study();      // New method
benisha.greet();       // Original Person method