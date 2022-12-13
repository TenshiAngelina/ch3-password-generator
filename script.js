// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var characters = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','^','_','`','{','|','}','~'];
var generatedPass = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var password = "";
  for (var i = 0; i < charLength; i++){
  var randomChar = Math.floor(Math.random() * generatedPass.length);
  password = password + generatedPass[randomChar];
}
return password
}

function userPrompts(){
  generatedPass = [];
  charLength = parseInt(prompt("How many characters (8 - 128)?"));
  if(isNaN(charLength) || charLength < 8 || charLength > 128){
    alert("You must enter a number for the length and 8 - 128 digits");
    return false;
  }
  if (confirm("Lower case?")){
    generatedPass = generatedPass.concat(lowerCase);
  }
  if (confirm("Upper case?")){
    generatedPass = generatedPass.concat(upperCase);
  }
  if (confirm("Special characters?")){
    generatedPass = generatedPass.concat(characters);
  }
  if (confirm("Numbers?")){
    generatedPass = generatedPass.concat(numbers);
  }
  return true;
}