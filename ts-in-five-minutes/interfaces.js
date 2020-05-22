function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Francis', lastName: 'Calizo' };
console.log(greeter(user));
