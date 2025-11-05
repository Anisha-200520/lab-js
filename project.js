// 📇 Step 1: Create an array of contact objects
const contacts = [
  {
    name: "anisha",
    phone: "9876543210",
    email: "anisha@example.com",
    displayInfo() {
      const { name, phone, email } = this; 
      console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
    }
  },
  {
    name: "Anu",
    phone: "9123456780",
    email: "anu@example.com",
    displayInfo() {
      const { name, phone, email } = this;
      console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
    }
  }
];

// 🧾 Step 2: Access properties using dot and bracket notation
console.log(contacts[0].name);        
console.log(contacts[1]["email"]);       

// 🔁 Step 3: Iterate through contacts and display info
contacts.forEach(contact => contact.displayInfo());

// ➕ Step 4: Function to add multiple contacts using rest parameters
function addContacts(...newContacts) {
  contacts.push(...newContacts); 
}

addContacts(
  {
    name: "Priya",
    phone: "9000012345",
    email: "priya@example.com",
    displayInfo() {
      const { name, phone, email } = this;
      console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
    }
  },
  {
    name: "Rahul",
    phone: "8000087654",
    email: "rahul@example.com",
    displayInfo() {
      const { name, phone, email } = this;
      console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
    }
  }
);

// 🔁 Step 5: Display all contacts again
console.log("\n📋 All Contacts:");
contacts.forEach(contact => contact.displayInfo());

// 🔄 Step 6: Demonstrate call(), apply(), bind()
const externalDisplay = function () {
  const { name, phone, email } = this;
  console.log(`(External) Name: ${name}, Phone: ${phone}, Email: ${email}`);
};

console.log("\n📞 Using call():");
externalDisplay.call(contacts[0]);

console.log("\n📧 Using apply():");
externalDisplay.apply(contacts[1]);

console.log("\n🔗 Using bind():");
const boundDisplay = externalDisplay.bind(contacts[2]);
boundDisplay();