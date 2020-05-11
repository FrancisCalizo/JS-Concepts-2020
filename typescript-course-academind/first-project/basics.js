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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Francis',
    age: 28,
    hobbies: ['sports', 'coding'],
    role: 1
};
// person.role.push(2) // This works
// person.role[1] = 2; // This doesn't
var favoriteActivities;
favoriteActivities = ['Basketball'];
console.log(person.name);
if (person.role === Role.READ_ONLY) {
    console.log('is read only');
}
