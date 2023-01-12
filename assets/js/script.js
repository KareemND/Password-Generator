// Assignment code here
// Function to generate a password
function generatePassword() {
  // Prompt for password criteria
  var length = prompt("Enter the desired length of the password (8-128 characters):");
  var includeLowercase = confirm("Include lowercase letters in the password?");
  var includeUppercase = confirm("Include uppercase letters in the password?");
  var includeNumeric = confirm("Include numbers in the password?");
  var includeSpecial = confirm("Include special characters in the password?");

  // Input validation
  if (length < 8 || length > 128) {
      alert("Invalid password length. Please enter a value between 8 and 128.");
      return;
  }
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("At least one character type must be selected.");
      return;
  }

  // Generate password
  var password = "";
  var characters = "";
  if (includeLowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
      characters += "0123456789";
  }
  if (includeSpecial) {
      characters += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  for (var i = 0; i < length; i++) { 
      password += characters.charAt(Math.floor(Math.random() * characters.length));
  }


  // Display or write password
  alert("Your generated password is: " + password);
  

//function insertText() {
   // pwd = document.getElementById("password").innerHTML= password;
//}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
