// Function to generate a random love score
function loveCalculator() {
    // Get names from the user (but we won't use them)
    var name1 = prompt("Enter the first person's name:");
    var name2 = prompt("Enter the second person's name:");

    // Generate a random love score between 1 and 100
    var loveScore = Math.floor(Math.random() * 100) + 1;

    // Determine the message based on the love score
    var message;
    if (loveScore > 75) {
        message = "You really love each other! Your love score is:";
    } else {
        message = "Your love score is:";
    }

    // Display the love score to the user
    alert(name1 + " and " + name2 + ", " + message + " " + loveScore + "%");
}

// Call the love calculator function
loveCalculator();