interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`User Created: ${name}`);
  }

  register() {
    console.log(`${this.name} is now registered`);
  }

  payInvoice() {
    console.log(`${this.name} paid invoice`);
  }
}

let john = new User("John", "Doe", 13);

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let Mike: User = new Member(1, "Mike Smith", "mike@gmail.com", 34);
Mike.payInvoice();
