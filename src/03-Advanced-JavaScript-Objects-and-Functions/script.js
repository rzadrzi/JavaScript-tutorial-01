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
/*
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
*/

// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log('a =',a); // 46
console.log('b =',b); // 23
// the value of a copied to variable b

// Objects
var obj1 = {name: 'Reza', age:32};
var obj2 = obj1;
var obj3 = { ...obj1 }; //************* IMPORTANT */
obj1.age = 23;

console.log(obj1); // {name: "Reza", age: 23}
console.log(obj2); // {name: "Reza", age: 23}
console.log(obj3); // {name: "Reza", age: 32}

// Functions
var obj = {name: 'Reza', age:32};
var width = 78;

function change(a, b){
    a.name = 'Hamed';
    b = 90;
}

change(obj,width)

console.log(obj); // {name: 'Hamed', age:32}
console.log(width); // 78

// First Class Functions Passing Functions as Arguments
var years = [1990, 1987, 1974, 1950, 2012];

function arrayCal(arr,fun){
    var arrRes = [];
    for(var i=0; i< arr.length; i++){
        arrRes.push(fun(arr[i]));
    }
    return arrRes
}

function calculateAge(el){
    return new Date().getFullYear() - el;
}

function isFullAge(el){
    return el >= 18;
}

var newAge = arrayCal(years,calculateAge);
var fullAges = arrayCal(newAge,isFullAge)
console.log(newAge);
console.log(fullAges);

