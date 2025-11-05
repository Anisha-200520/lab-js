const person = {
  name: "anisha"
};

function introduce(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

introduce.call(person, "Hi");       
introduce.apply(person, ["Hello"]); 

const boundIntro = introduce.bind(person);
boundIntro("Hey");                  