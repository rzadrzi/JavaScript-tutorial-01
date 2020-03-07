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