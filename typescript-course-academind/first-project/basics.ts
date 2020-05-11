// const person: {
//   name: string; // Bad Practice unless needed. Just let TS use type inference
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Francis',
//   age: 28,
//   hobbies: ['sports', 'coding'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Francis',
  age: 28,
  hobbies: ['sports', 'coding'],
  role: 1,
};

// person.role.push(2) // This works
// person.role[1] = 2; // This doesn't

let favoriteActivities: string[];
favoriteActivities = ['Basketball'];

console.log(person.name);

if (person.role === Role.READ_ONLY) {
  console.log('is read only');
}
