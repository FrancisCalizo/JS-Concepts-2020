// A class in an extensible template for creating objects, providing inital values for properties and methods.
// Classes are primarily syntactical sugar over the existing protype-based inheritance.
// It is a type of function and the properties are assigned inside the constructor() method.
// The constructor method lets us set fields and is called each time the class object is initialized.

class Character {
  constructor(name, gender, type) {
    this.name = name;
    this.gender = gender;
    this.type = type;
  }

  getSummary() {
    return `${this.name} is a ${this.gender} ${this.type}.`;
  }

  turnToTheDarkSide() {
    this.type = 'Sith';
    this.turned = true;
  }

  // The static keyword defines a static method for a class.
  // Static methods aren't called on instances of the class.
  // Instead, they're called on the class itself.
  static sayTheCreed = () => {
    return `This is the way.`;
  };
}

character1 = new Character('Anakin Skywalker', 'Male', 'Jedi Knight');
character2 = new Character('Darth Maul', 'Male', 'Renegade Sith Lord');

character1.turnToTheDarkSide();
console.log(character1);
console.log(Character.sayTheCreed());
