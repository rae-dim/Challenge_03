const hobbies = {firstName: 'John',
age: 35,
hobbies: 'Coding'};


function logTwice(parameter) {
  console.log(parameter);
  console.log(parameter);
}

function hobby () {
  logTwice(`Hello, ${hobbies.firstName} (${hobbies.age}). I love ${hobbies.hobbies}!`);
  //console.log(`Hello, ${hobbies.firstName} (${hobbies.age}). I love ${hobbies.hobbies}!`);
};

hobby();