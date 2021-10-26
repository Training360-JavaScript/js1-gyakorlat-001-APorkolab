const person = {firstname: "Metell", lastname: "Babiagoriai Riparievich", age: 50}

const personDataLog = person => {
  if (person.firstname === null || person.firstname === "") {
    person.firstname = John;
  } else if (person.lastname === null || person.lastname === "") {
    person.firstname = Doe;
  } else if (person.age === 0 && person.age < 0) {
    person.age = 33;
  }
  return "My name is " + person.firstname + person.lastname + ". I'm " + person.age + " years old.";
};