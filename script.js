
var generateBtn = document.querySelector("#generate");
var length = 0;
var incLower
var incUpper
var incNumbers
var incSymbols

function generatePassword() {

  let password = ''

  for (let index = 0; index < length; index = password.length) {

    let randomizer = Math.floor(Math.random() * 4) + 1

    switch (randomizer) {
      case 1:
        if (incLower) password += getRandomLower();
        break;
      case 2:
        if (incUpper) password += getRandomUpper();
        break;
      case 3:
        if (incNumbers) password += getRandomNumbers();
        break;
      case 4:
        if (incSymbols) password += getRandomSymbols();
        break;
      default:
        break;
    }


  }


  return password.substring(0, length)
};


var inquiry = function () {
  let characterAmount = window.prompt("How many characters long would you like your password? Minimum is 8, max is 128.")


  if (characterAmount === "" || characterAmount === null) {
    window.alert("That's not a valid answer, please try again.")
    return inquiry();
  }

  if (characterAmount < 8 || characterAmount > 128) {
    window.alert("That's not a valid entry. Do it right this time.")
    return inquiry();
  } else {
    askForLowerCase();
    length += characterAmount;
    console.log(length)
  };
};

var askForLowerCase = function () {
  let answerLower = window.confirm("Would you like your password to include lower case letters?")

  if (answerLower) {
    window.alert("Your password will contain lowercase letters!")
    incLower = true
  } else {
    window.alert("No lower case for you.");
    incLower = false
  }
  askForUpperCase();
};



var askForUpperCase = function () {
  let answerUpper = window.confirm("Would you like upper case letters in your password?")

  if (answerUpper) {
    window.alert("Your password will contain upper case letters!")
    incUpper = true
  } else {
    window.alert("No upper case for you.")
    incUpper = false
  }
  askForNumbers();
};


var askForNumbers = function () {
  let answerNumbers = window.confirm("Do you want it to include numbers?")

  if (answerNumbers) {
    window.alert("Let's add some numbers!");
    incNumbers = true
    console.log(incNumbers)

  } else {
    window.alert("No numbers will be included.")
    incNumbers = false
  }
  askForSymbols();
};


var askForSymbols = function () {
  let answerSymbols = window.confirm("Do you want special characters/symbols?");

  if (answerSymbols) {
    window.alert("Let's get secure!")
    incSymbols = true
  } else {
    window.alert("No symbols will be added.");
    incSymbols = false
  }
  generatePassword();
};

inquiry();


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);



var getRandomLower = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var getRandomUpper = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

var getRandomNumbers = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

var getRandomSymbols = function () {
  var symbols = "!@#$%^&*()?{}[]/\.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

