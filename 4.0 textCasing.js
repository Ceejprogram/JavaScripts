// Function to ask for the user's name and greet them
function greetUser() {
    // Prompt the user for their name
    const userInput = prompt("Please enter your name:");

    // Check if the user input is not null
    if (userInput !== null) {
        // Capitalize the first letter and make the rest lowercase
        const formattedName = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

        // Display the greeting
        alert("Hello " + formattedName + "!");
    } else {
        alert("No name was entered.");
    }
}

// Run the function
greetUser();