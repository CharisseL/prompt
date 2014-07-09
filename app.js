var prompt = require('sync-prompt').prompt
var firstName = prompt ('What is your first name? ');
var lastName = prompt ('What is your last name? ');
var fullName = firstName + lastName;
console.log('your name is', firstName + ' ' + lastName);

var color = prompt('What is your fav color?');
console.log('your fav color is', color);

var age = prompt("What is your dog's age? ");
console.log(typeof age);
age = parseInt(age);
var humanAge = (age * 7);
console.log(typeof humanAge);
console.log('Your dog\'s age is', age);
console.log('Your dog\'s human age is', humanAge);

var yourAge = prompt("What is your age? ");
if(yourAge >=21){
  console.log('Then oogywawa!! That is Zulu for cheers.');
}else{
  console.log('Stay thirsty, my friends. None for you.')
}

var scale  = prompt('What scale are you using (f/c)? ');
var temp = prompt('What is the temperature? ');

temp = parseInt(temp);
var converted;
var alt;

if(scale  === "f"){
  converted = (temp - 32) * 5/9; 
  alt = 'c';
}else{ 
  converted = ((9/5) * temp) + 32;
  alt = 'f';
}
  console.log(temp + scale + ' -> ' + converted + alt); 
  
var height =parseInt(prompt('What is your height in inches? '));
var weight =parseInt (prompt('What is your weight in lbs? '));
var bmi = (weight * 703)/  Math.pow(height, 2);
console.log('Your bmi is' + bmi.toFixed(1));




