var characterAmount = window.prompt("How many characters long would you like your password? Minimum is 8, max is 128.")

 
  if (characterAmount === "" || characterAmount === null) {
    window.alert("That's not a valid answer, please try again.")
    return generatePassword();
  }

  if (characterAmount < 8 || characterAmount > 128) {
    window.alert("That's not a valid entry. Do it right this time.")
    return generatePassword();
  }else {
    askForLowerCase();
    var length = +characterAmount.value;
  };
  
  function askForLowerCase() {
    var answerLower = window.confirm("Would you like your password to include lower case letters?")

    if (answerLower) {
      window.alert("Your password will contain lowercase letters!")
      createdPassowrd = + randomFunc.lower
     askForUpperCase();

    } else {
      window.alert("No lower case for you.");
     askForUpperCase();
    };

  function askForUpperCase() {
    var answerUpper = window.confirm("Would you like upper case letters in your password?")

    if (answerUpper) {
      window.alert("Your password will contain upper case letters!")
      createdPassowrd = + randomFunc.upper
      askForNumbers();
    } else {
      window.alert("No upper case for you.")
      askForNumbers();
    }
    };
  }

  function askForNumbers() {
    var answerNumbers = window.confirm("Do you want it to include numbers?")

    if (answerNumbers) {
      window.alert("Let's add some numbers!");
      createdPassowrd = + randomFunc.numbers
      askForSymbols();

    } else {
      window.alert("No numbers will be included.")
      askForSymbols();
    }
  }

  function askForSymbols() {
    var answerSymbols = window.confirm("Do you want special characters/symbols?");

    if (answerSymbols) {
      window.alert("Let's get secure!")
      createdPassowrd = + randomFunc.symbols
    } else {
      window.alert("No symbols will be added.");
    }
  };



  for(let i = 0; i < length; i += characterTypes) {
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0];
  
      createdPassowrd += randomFunc[funcName]();
    });
  }
  
 const thePassword = createdPassowrd.slice(0, length);
  (console.log(thePassword));


  let createdPassowrd = ''



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumbers,
  symbols: getRandomSymbols
};

const characterTypes = randomFunc.lower + randomFunc.upper + randomFunc.numbers + randomFunc.symbols;

const typesArray = [ randomFunc.lower, randomFunc.upper, randomFunc.numbers, randomFunc.symbols]



function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
  var symbols = "!@#$%^&*()?{}[]/\.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}