// Inheritance refers to an object's ability to access methods and other properties from another object.
// Inheritance in JavaScript works through prototypes and this form of inheritance is called Prototypal Inheritance.
// It is the concept of one thing (an object) gaining the properties or behaviors of something else (another object).

// Constructor
function Character(name, gender, type) {
  this.name = name;
  this.gender = gender;
  this.type = type;
}

Character.prototype.getSummary = function () {
  return `${this.name} is a ${this.gender} ${this.type}.`;
};

// Inheritance
function SideCharacter(name, gender, type, role) {
  Character.call(this, name, gender, type);

  this.role = role;
}

// Inherit Prototype
SideCharacter.prototype = Object.create(Character.prototype);

// Instantiate SideCharacter Object
const sideCharacter1 = new SideCharacter(
  'Commander Fox',
  'Male',
  'Clone',
  'Minor'
);

// Use Sidecharacter Constructor after inheriting Character prototype
SideCharacter.prototype.constructor = SideCharacter;

console.log(sideCharacter1);
