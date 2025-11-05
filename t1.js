class User {
  #password; // Private field

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  // Getter for password
  get password() {
    return "Access Denied";
  }

  // Setter for password with validation
  set password(newPassword) {
    if (newPassword.length >= 6) {
      this.#password = newPassword;
    } else {
      console.log("Password must be at least 6 characters.");
    }
  }

  // Static method
  static greet() {
    console.log("Welcome to JavaScript Class!");
  }

  // Method to check private password (for testing)
  checkPassword() {
    return this.#password;
  }
}

// Usage
User.greet(); // Static method call

const user1 = new User("john_doe", "123456");
console.log(user1.password); // Access Denied

user1.password = "abc";     // Too short
user1.password = "abcdef";  // Password updated

console.log(user1.checkPassword()); // abcdef
