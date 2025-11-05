const student = {
  name: "anisha",
  age: 19,
  course: "JavaScript",
  location: "Tamil Nadu"
};

// Destructuring basic properties
const { name, age, course } = student;
console.log(name);   
console.log(age);   
console.log(course);

const profile = {
  id: 101,
  details: {
    username: "anisha21",
    email: "anisha@example.com"
  }
};


const {
  details: { username, email },
  status = "active" 
} = profile;

console.log(username); 
console.log(email);    
console.log(status);   

const baseInfo = {
  name: "anisha",
  age: 21
};

const additionalInfo = {
  course: "JavaScript",
  location: "Tamil Nadu"
};


const clone = { ...baseInfo };
console.log(clone); 


const merged = { ...baseInfo, ...additionalInfo };
console.log(merged);