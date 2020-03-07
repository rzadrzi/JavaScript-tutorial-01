/**
 *** Javascript data types ***
 * 1-Number
 * 2-String
 * 3-Boolean
 * 4-Undefined -> Data type of a variable that has NOT a value yet
 * 5-Null -> also means not existent
 */

 console.log('%c Javascript data types','color:red');
 
// Number
var numb = 32.43;
console.log(`1-Number: ${numb}`);
// String
var firstName = 'Reza';
var lastName = 'Darzi';
console.log(`2-String: ${firstName}-${lastName}`);
// Boolean
var bool = false;
console.log(`3-Boolan: ${bool}`);
// Undefined
var undf;
console.log(`4-Undefined: ${undf}`);
// Null
var nul=null;
console.log(`5-Null: ${nul}`);


/**
 * BMI challenge
 */
console.log('%c BMI challenge','color:green');

 function BMI( { mass, height } ){
     return mass/height**2
 }

 const reza ={
     mass:78,
     height:1.68
 }

 const hamed = {
     mass:71,
     height:1.68
 }
 console.log(BMI(reza));
 console.log(BMI(hamed));


 /**
  * Truthy and Falsy Values and Equality Operators
  * 
  */
 
  // Falsy Values -> undefined, null, 0, '', NaN
  // Truthy Values -> NOT Falsy Values

  var var01='';

  switch (var01){
    case undefined:
    case null:
    case 0:
    case '':
    // case NaN:
        console.log('%c Falsy Variable','color:red');
        break;
    default:
        console.log('%c Truthy Variable','color:green');
                            
  }

  
  /**
   * Functions
   */

   function AgeCal01(birthday){
       return new Date().getFullYear()-birthday
   }
   console.log(AgeCal01(1987));
   

/**
 * Function Statements and Expressions
 */

// Function Decoloration
fun01('reza','darzi')//********************** this is important */
function fun01(firstName, lastName){
    console.log(`Full Name: ${firstName}-${lastName}`);
}
fun01('reza','darzi')

// Function Expression
var fun02 = function(firstName,lastName){
    console.log(`Full Name: ${firstName}-${lastName}`);
}
fun02('reza','darzi')

/**
 * Arrays
 */
var names = ['reza', 'hamed', 'leila', 'masoume', 'nasser']
var years = new Array(1398, 1397, 1395, 1394)

console.log({names,years});


/**
 * Objects and Properties
 */
// aproach 01
var rezaDarzi = {
    firstName: 'Reza',
    lastName: 'Darzi',
    birthday: 1987,
    job: 'Digital Marketing',
    isMarried: false,
    // Objects and Methods
    calAge: function(){
        this.age = new Date().getFullYear() - this.birthday
    }
}
rezaDarzi.calAge() //********************** this is important */

console.log(rezaDarzi);
console.log(rezaDarzi.firstName);
console.log(rezaDarzi['lastName']);

rezaDarzi.job='Machine Learning Engineer'
console.log(rezaDarzi['job']);

// aproach 02
var hamedDarzi = new Object()
hamedDarzi['firstName'] = 'hamed';
console.log(hamedDarzi);

