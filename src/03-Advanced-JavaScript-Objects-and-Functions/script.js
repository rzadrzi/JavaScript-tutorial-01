// Everything is an OBJECT

// Primitives -> Numbers, Strings, Booleans, Undefined, Null
// Objects -> Array, Functions, Objects, Dates, Wrappers of Numbers, Strings aanndd ..........

/*
var Person = function(name, yearOfBirthday, job){ // Person is constructor function
    this.name = name;
    this.yearOfBirthday = yearOfBirthday;
    this.job = job;
    this.age = this.calAge()
}

Person.prototype.calAge = function(){
    return new Date().getFullYear() - this.yearOfBirthday;
}

var reza = new Person('reza', 1987, 'Digital Marketing');

console.log(reza);
*/

// Object.create
var personPrototype = {
    calAge: function(){
        return new Date().getFullYear() - this.yearOfBirthday;
    }
}

var reza = Object.create(personPrototype,{
    name: { value: 'reza' },
    yearOfBirthday: { value: 1987 },
    job: { value: 'Digital Marketing' },
    // age: { value:  null  }
})
reza.age = reza.calAge()
console.log(reza);
console.log(reza.calAge());

