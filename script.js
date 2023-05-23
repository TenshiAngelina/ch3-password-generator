// Assignment Code
var generateBtn = document.querySelector('#generate');
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var characters = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','^','_','`','{','|','}','~'];
var charLength = 8;
var generatedPass = [];
// var password = generatePassword;

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var prompts = userPrompts();
  if(prompts) {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
}

function generatePassword(){
  var password = '';
  for (var i = 0; i < charLength; i++){
    var randomChar = Math.floor(Math.random() * generatedPass.length);
    password = password + generatedPass[randomChar];
  }
  return password;
}

function userPrompts(){

  var charLength = parseInt(prompt('How many character do you want your password to be (choose a number between 8 and 128)?'));

  if(isNaN(charLength) || charLength < 8 || charLength > 128){
    alert('You must enter a number between 8 and 128');
    return false;
  }

  var confLCase = window.confirm('Include lower case?');
  var confUCase = window.confirm('Include upper case?');
  var confNumber = window.confirm('Include special characters?');
  var confChara = window.confirm('Include numbers?');

  if (confLCase){
    generatedPass = generatedPass.concat(lowerCase);
  }
  if (confUCase){
    generatedPass = generatedPass.concat(upperCase);
  }
  if (confNumber){
    generatedPass = generatedPass.concat(characters);
  }
  if (confChara){
    generatedPass = generatedPass.concat(numbers);
  }
  if (generatedPass.length === 0) {
    alert('You must select at least one type of character.');
    return false;
  }
  return true;
}
