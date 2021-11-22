// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(

  );
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