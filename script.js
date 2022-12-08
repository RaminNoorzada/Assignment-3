// Assignment Code
var generateBtn = document.querySelector("#generate");

function random(min, max) {}
//Function that will prompt the suggestions
function generatePassword() {
  var userInput = window.prompt("Lenth of Password?");

  var passwordLenth = parseInt(userInput);
  //If statement to alerts the user of wrong key inpt
  if (isNaN(passwordLenth)) {
    window.alert("This is Not a Number!");
    return;
  }
  //If statment to alerts the user of the length
  if (passwordLenth < 8 || passwordLenth > 128) {
    window.alert("Password Lenth must be between 8 and 128 charcters");
    return;
  }

  //Variables of the suggestion of num, symb, lowercase and uppercase in there password
  var userWantsNumbers = window.confirm(
    "Would you like to include Numbers in your Password"
  );
  var userWantsSymbols = window.confirm(
    "Would you like to include Symbols in your Password"
  );
  var userWantsLowercase = window.confirm(
    "Would you like to include Lowercase letters in your Password"
  );
  var userWantsUppercase = window.confirm(
    "Would you like to include Uppercase letters in your Password"
  );

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var simbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaseLIst = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "L",
    "M",
    "N",
    "O",
    "P",
    "q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var optionsCart = [];

  // for (var i = 0; lowercaseList.length; i++) {
  //   uppercaseLIst[i] = lowercaseList.length[i].toUpperCase()
  // }

  if (userWantsNumbers === true) {
    optionsCart = optionsCart.concat(numberList);
    console.log(optionsCart);
  }

  if (userWantsSymbols === true) {
    optionsCart = optionsCart.concat(simbolList);
    console.log(optionsCart);
  }

  if (userWantsLowercase === true) {
    optionsCart = optionsCart.concat(lowercaseList);
    console.log(optionsCart);
  }

  if (userWantsUppercase === true) {
    optionsCart = optionsCart.concat(uppercaseLIst);
    //optionsCart.push(...uppercaseLIst)
    console.log(optionsCart);
  }

  console.log(optionsCart);

  var generatePasswordValue = "";

  for (var i = 0; i < passwordLenth; i++) {
    // var mathRandom = Math.random();
    // var randomNumber = Math.random() * optionsCart.length;
    var randomIndex = Math.floor(Math.random() * optionsCart.length);
    console.log(randomIndex);
    var randomValue = optionsCart[randomIndex];
    console.log(randomValue);
    generatePasswordValue += randomValue;
  }

  return generatePasswordValue;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
