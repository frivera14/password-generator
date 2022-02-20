// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = 0;

function generatePassword() {
     

  
  
  return "The password goes here"
};


var inquiry = function() {
   characterAmount =  window.prompt("How many characters long would you like your password? Minimum is 8, max is 128.")

 
  if (characterAmount === "" || characterAmount === null) {
    window.alert("That's not a valid answer, please try again.")
    return inquiry();
  }

  if (characterAmount < 8 || characterAmount > 128) {
    window.alert("That's not a valid entry. Do it right this time.")
    return generatePassword();
  }else {
    askForLowerCase();
    length += characterAmount;
    console.log(length)
  };
};

var askForLowerCase = function() {
    answerLower = window.confirm("Would you like your password to include lower case letters?")

    if (answerLower) {
      window.alert("Your password will contain lowercase letters!")
      getRandomLower = true
     askForUpperCase();
    } else {
      window.alert("No lower case for you.");
     askForUpperCase();
     getRandomLower = false
    }
};

  

var askForUpperCase = function() {
     answerUpper = window.confirm("Would you like upper case letters in your password?")

    if (answerUpper) {
      window.alert("Your password will contain upper case letters!")
      getRandomUpper = true
      askForNumbers();      
    } else {
      window.alert("No upper case for you.")
      askForNumbers();
      getRandomUpper = false
    }
};
  

var askForNumbers = function() {
     answerNumbers = window.confirm("Do you want it to include numbers?")

    if (answerNumbers) {
      window.alert("Let's add some numbers!");
      incNumbers = true
      askForSymbols();
      console.log(incNumbers)

    } else {
      window.alert("No numbers will be included.")
      askForSymbols();
      incNumbers = false
    }
};


var askForSymbols = function() {
    answerSymbols = window.confirm("Do you want special characters/symbols?");

    if (answerSymbols) {
      window.alert("Let's get secure!")
      incSymbols = true
      generatePassword();
      console.log(incSymbols)
    } else {
      window.alert("No symbols will be added.");
      generatePassword();
      incSymbols = false
    }
};

inquiry();

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var getRandomLower = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

var getRandomNumbers = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

var getRandomSymbols =function() {
  var symbols = "!@#$%^&*()?{}[]/\.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

