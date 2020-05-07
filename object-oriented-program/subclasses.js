// A subclass is a class that inherits all the properties of another class while being able to add or modify properties.
// Any failed lookups on the subclass will delegate up to the prototype chain of parent classes.
// The super() method is used to access and call functions on an object's parent.
// By calling the super() method, we call the parent's constructor method and get access to the parent's properties and methods.

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

  static sayTheCreed = () => {
    return `This is the way.`;
  };
}

// Subclass inherits Class
class SideCharacter extends Character {
  constructor(name, gender, type, role) {
    super(name, gender, type);
    this.role = role;
  }
}

const sideCharacter1 = new SideCharacter(
  'Boba Fett',
  'Male',
  'Bountry Hunter',
  'Major'
);

console.log(sideCharacter1.getSummary());
