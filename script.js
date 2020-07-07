// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", "]", ">", "?", "@", "[","_", "^", "`", "{", "|", "}", "~", "\\"];

let passwordLength
let inputArray

function setOptions(){
passwordLength = 0;
inputArray = [];
while(passwordLength<8 || passwordLength> 128){
  passwordLength = prompt("Please enter password length (between 8 and 128)")
}
let upperCase = confirm("Would you like uppercase letters in your password?");
let lowerCase = confirm("Would you like lowercase letters in your password?");
let passwordNumbers = confirm("Would you like numbers in your password?");
let specialCharacterInput = confirm("Would you like special characters in your password?");

if(upperCase){
  inputArray = inputArray.concat(upperCaseLetters)
}
if(lowerCase){
  inputArray = inputArray.concat(lowerCaseLetters)
}
if(passwordNumbers){
  inputArray = inputArray.concat(numbers)
}
if(specialCharacterInput){
  inputArray = inputArray.concat(specialCharacters)
}
console.log(passwordLength)
console.log(inputArray)
}



function writePassword() {
  setOptions()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //do some stuff
  let finalPassword = "";
  //for loop
for (let index = 0; index < passwordLength; index++) {
  //choose a random char from inputArray,
  //random number from 0 - length of inputArray
  //add character to final Password;
let index = Math.floor(Math.random()*inputArray.length);
let char = inputArray[index];
console.log(char);
finalPassword += char;
}
  //returns a string thats the generated password
  return finalPassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
