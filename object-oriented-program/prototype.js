// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// All JavaScript objects inherit properties and methods from a prototype.
// To provide inheritance, objects can have a prototype object, which acts as a template object
// that it inherits methods and properties from

function Character(name, gender, type) {
  this.name = name;
  this.gender = gender;
  this.type = type;
}

Character.prototype.getSummary = function () {
  return `${this.name} is a ${this.gender} ${this.type}.`;
};

Character.prototype.turnToTheDarkside = function () {
  this.type = 'Sith';
  this.turned = true;
};

// Instantiate an Object
const character1 = new Character('Anakin Skywalker', 'Male', 'Jedi Knight');
const character2 = new Character('Ahsoka Tano', 'Female', 'Jedi Padawan');

console.log(character1);
character1.turnToTheDarkside();
console.log(character1);
