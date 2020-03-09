// Everything is an OBJECT

// Primitives -> Numbers, Strings, Booleans, Undefined, Null
// Objects -> Array, Functions, Objects, Dates, Wrappers of Numbers, Strings aanndd ..........


var Person = function(name, yearOfBirthday, job){ // Person is constructor function
    this.name = name;
    this.yearOfBirthday = yearOfBirthday;
    this.job = job;
}

var reza = new Person('reza', 1987, 'Digital Marketing');

console.log(reza);

