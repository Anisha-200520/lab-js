// Menu-Driven Calculator using switch, loops, and input validation

const prompt = require('prompt-sync')(); // For user input in Node.js

let choice;
do {
    console.log("\n=== Calculator Menu ===");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    choice = parseInt(prompt("Enter your choice (1-5): "));

    if (choice >= 1 && choice <= 4) {
        // Get two numbers from the user
        let num1 = parseFloat(prompt("Enter first number: "));
        let num2 = parseFloat(prompt("Enter second number: "));

        
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input. Please enter valid numbers.");
            continue; // Skip to next iteration
        }

        // Perform operation based on choice
        switch (choice) {
            case 1:
                console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
                break;
            case 2:
                console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
                break;
            case 3:
                console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
                break;
            case 4:
                if (num2 === 0) {
                    console.log("Error: Division by zero is not allowed.");
                } else {
                    console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
                }
                break;
        }
    } else if (choice === 5) {
        console.log("Exiting calculator. Goodbye!");
        break; // Exit the loop
    } else {
        console.log("Invalid choice. Please select a valid option.");
        continue; 
    }

} while (true);