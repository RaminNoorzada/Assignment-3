// Assignment Code
var generateBtn = document.querySelector("#generate");

function random(min, max) {

}

function generatePassword() {

  var userInput = window.prompt("Lenth of Password?")

  var passwordLenth = parseInt(userInput)

  if (isNaN(passwordLenth)) {
    window.alert("This is Not a Number!")
    return
  }

  if (passwordLenth < 8 || passwordLenth > 128) {
    window.alert("Password Lenth must be between 8 and 128 charcters")
    return
  }

  
  var userWantsNumbers = window.confirm("Would you like to include Numbers in your Password")
  var userWantsSymbols = window.confirm("Would you like to include Symbols in your Password")
  var userWantsLowercase = window.confirm("Would you like to include Lowercase letters in your Password")
  var userWantsUppercase = window.confirm("Would you like to include Uppercase letters in your Password")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var simbolList = ["!", "@", "#", "$", "%", "^", "&", "*",]
  var lowercaseList = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseLIst = []

  var optionsCart = []

  for (var i = 0; lowercaseList.length; i++) {
    uppercaseLIst[i] = lowercaseList.length[i].toUpperCase()
  }

  if (userWantsSymbols === true) {
    optionsCart.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(simbolList)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(lowercaseList)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(uppercaseLIst)
  }
  
  var generatePassword = ""

  for (var i = 0; i < passwordLenth; i++) {

  }
  
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
