// Prompt the user to enter the age of their dog
var dogAge = prompt("Please enter your dog's age:");

// Convert the input to a number
dogAge = Number(dogAge);

// Check if the input is a valid number
if (!isNaN(dogAge) && dogAge >= 0) {
    // Calculate the human age using the provided formula
    var humanAge = (dogAge - 2) * 4 + 21;

    // Display the result in an alert
    alert("Your dog's age in human years is: " + humanAge);
} else {
    // Alert the user if the input is not valid
    alert("Please enter a valid age for your dog.");
}