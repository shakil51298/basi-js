//parse 2 kind of parse are there
//Convert string to number
var number1 = '25.5';
number2 = 40;
number1 = parseInt(number1);
console.log(number1 + number2);

// convert Number to string
var number1 = 26;
number1 = '' + number1;
var numer3 = 36;

console.log(typeof number1);

// how to fix the position after decimal point

var sha = 0.1;
var sja = 0.2;
// normally the output was 0.3000000000004;
var total = sja + sha;
total = total.toFixed(1); //this is line change the position of the decimal point
console.log(total);


//using math.random 
var number = Math.random() * 100;
var result = Math.round(number);
console.log(result);