// A Constructor is a function that is used to create an instance of an object.
// The purpose of a constructor is to create an object and set values if there are any object properties present.
// It is useful when you want to create multiple similar objects with the same properties and methods.
// It can be viewed as a normal function which initializes a value or sets the default values.

// Constructor Function
function Character(name, gender, type) {
  this.name = name;
  this.gender = gender;
  this.type = type;

  this.getSummary = function () {
    return `${this.name} is a ${this.gender} ${this.type}.`;
  };
}

// Instantiate an Object
const character1 = new Character('Anakin Skywalker', 'Male', 'Jedi Knight');
const character2 = new Character('Ahsoka Tano', 'Female', 'Jedi Padawan');

console.log(character2.getSummary());
