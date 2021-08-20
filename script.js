// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password"); //area in which the password will be printed
var lowercaseElement = document.getElementById("lowercase");
var uppercaseElement = document.getElementById("uppercase");
var numbersElement = document.getElementById("numbers");
var symbolsElement = document.getElementById("symbols");


//Password character options
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWKYZ"
var numbers = "1234567890"
var symbols = "!#$%^&=@~"

//Defining the character length with a slider:
//set defaoult length display of 25
document.getElementById("length").textContent = "Password Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){
  document.getElementById("length").textContent = "Password Length: "+ document.getElementById("slider").value;
}

//When selected "Generate Password" btn:
generateBtn.addEventListener ("click", () => {

  //If no user input for type of characters display alert:
  if (lowercaseElement.checked == false && uppercaseElement.checked == false && numbersElement.checked == false && symbolsElement.checked == false) {
    alert ("Please select at least one type of password characters")
  }

  //Assigning the characters to each check the user select:
  var passwordCharacters = "";
  lowercaseElement.checked ? (passwordCharacters += lowercase) : "";
  uppercaseElement.checked ? (passwordCharacters += uppercase) : "";
  numbersElement.checked ? (passwordCharacters += numbers) : "";
  symbolsElement.checked ? (passwordCharacters += symbols) : "";

  var lengthElement = document.getElementById("slider").value;

  passwordText.value = generatePassword(lengthElement, passwordCharacters);
});

//Password generator
var generatePassword = (lengthElement, passwordCharacters) => {
  let password = "";
  for (let i=0; i< lengthElement; i++) {
    password += passwordCharacters.charAt(
      Math.floor(Math.random () * passwordCharacters.length)
    );
  }
  return password;
};
