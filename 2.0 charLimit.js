// Prompt the user to enter a long string
var userInput = prompt("Please enter your text (up to 140 characters):");

// Define the character limit
var charLimit = 140;

// Calculate the number of characters written
var charCount = userInput.length;

// Calculate the number of characters remaining
var charsRemaining = charLimit - charCount;

// Output the results using alert
if (charCount <= charLimit) {
    alert("You have written " + charCount + " characters. You only have " + charsRemaining + " characters left.");
} else {
    alert("Your input exceeds the limit of 140 characters.");
}