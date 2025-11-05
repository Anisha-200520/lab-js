// Global task list array
let taskList = [];


function addTask(task, callback) {
  taskList.push(task);
  callback();
}


const printTasks = () => {
  console.log("Current Tasks:");
  taskList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
};

function addMultipleTasks(...tasks) {
  tasks.forEach(task => taskList.push(task));
  printTasks();
}


let globalVar = "I'm a global variable";

function scopeDemo() {
  let localVar = "I'm a local variable";
  console.log(globalVar); 
  console.log(localVar);   
}

scopeDemo();


addTask("Finish assignment", printTasks);
addTask("Review code", printTasks);
addMultipleTasks("Test module", "Submit project", "Celebrate 🎉");