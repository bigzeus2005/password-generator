// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Write password to the #password input
function generatePassword() {
  var characterLength = parseInt(prompt("Enter a password between 8 and 128 character."));
  var possibleCharacters = [];
  var placeHolder = [];
  
  if (characterLength >= 8 && characterLength <= 128) {
    var characterUpper = confirm("Would you like Uppercase characters?");
    var characterLower = confirm("Would you like lowercase characters?");
    var characterSpecial = confirm("Would you like special characters?");
    var characterNum = confirm("Would you like number characters?");
    
    if (characterUpper) {
      possibleCharacters = possibleCharacters.concat(upper)
    }

    if (characterLower) {
      possibleCharacters = possibleCharacters.concat(lower)
    }

    if (characterSpecial) {
      possibleCharacters = possibleCharacters.concat(special)
    }

    if (characterNum) {
      possibleCharacters = possibleCharacters.concat(num)
    }

    for (var i = 0; i < characterLength; i++) {
      var randomNum = Math.floor(Math.random() * possibleCharacters.length) + 0;
      placeHolder.push(possibleCharacters[randomNum]);
    }

  } else {
    alert("Please enter a value between 8 and 128 characters.");
    generatePassword();
  };

  if (!characterUpper && !characterLower && !characterSpecial && !characterNum) {
    alert("You must choose at least one option")
  };

  return placeHolder.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// pseudocode

// ask how many characters in passwowrd between 8-128
  // create a if loop to make sure their input is between the specified length, else prompt them to enter a value within the range

// ask if they want capital letters
  // proceed to the next step regardless of answer - log answer to be added to final password choice

// ask if they want special characters
  // proceed to the next step regardless of answer - log answer to be added to final password choice

// ask if they want lowercase letters
  // proceed to the next step regardless of answer - log answer to be added to final password choice

// ask if they want numbers
  // proceed to the next step regardless of answer - log answer to be added to final password choice

// put answers together to generate password
  // concat options of all choices to generate a password

// output password