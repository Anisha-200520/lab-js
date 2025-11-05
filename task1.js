const user = {
  name: "anisha",
  age: 20,
  address: {
    city: "Mettuppalayam",
    state: "Tamil Nadu"
  }
};

// Object destructuring
const { name, address: { city } } = user;
console.log(name); 
console.log(city); 

// Array destructuring
const colors = ["red", "green", "blue"];
const [primary, secondary] = colors;
console.log(primary); 
console.log(user.name);        
console.log(user["address"]["state"]); 

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

Object.entries(user).forEach(([key, value]) => {
  console.log(`{key}: ${value}`);
});