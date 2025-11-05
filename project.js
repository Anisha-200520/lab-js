// utils.js

// Email validation function
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
// User.js

import { isValidEmail } from './utils.js';

export class User {
  #name;
  #email;

  constructor(name, email) {
    this.#name = name;
    this.#email = email;
  }

  // Getter for name
  get name() {
    return this.#name;
  }

  // Setter for name
  set name(newName) {
    if (newName.length >= 2) {
      this.#name = newName;
    } else {
      console.log("Name must be at least 2 characters.");
    }
  }

  // Getter for email
  get email() {
    return this.#email;
  }

  // Setter for email
  set email(newEmail) {
    if (User.validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log("Invalid email format.");
    }
  }

  // Static method to validate email
  static validateEmail(email) {
    return isValidEmail(email);
  }
}

// Add method via prototype to log user activity
User.prototype.logActivity = function(activity) {
  console.log(`[Activity Log] ${this.name}: ${activity}`);
};
// main.js

import { User } from './User.js';

// Create a user instance
const user1 = new User("Alice", "alice@example.com");

// Display user details
console.log("Initial Name:", user1.name);
console.log("Initial Email:", user1.email);

// Log some user activities
user1.logActivity("Logged in");
user1.logActivity("Viewed dashboard");

// Try changing name and email
user1.name = "A";  // Too short - will trigger error
user1.name = "Alicia";  // Valid

user1.email = "not-an-email"; // Invalid
user1.email = "alicia@domain.com"; // Valid

// Show updated values
console.log("Updated Name:", user1.name);
console.log("Updated Email:", user1.email);
