function processUserInput(callback) {
  const name = "anisha";
  callback(name);
}

function sayHello(userName) {
  console.log(`Welcome, ${userName}!`);
}

processUserInput(sayHello); 