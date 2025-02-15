// Function to prompt for text and alert with the text
function checkTweetLength() {
    // Prompt the user to paste a large paragraph of text
    const userInput = prompt("Please paste your text here:");

    // Check if the user input is not null
    if (userInput !== null) {
        // Truncate the text to 140 characters if it exceeds the limit
        const truncatedText =
            userInput.length > 140 ? userInput.substring(0, 140) : userInput;

        // Show an alert with the text and a message about the character limit
        alert(
            "Your text:\n\n" +
            truncatedText +
            "\n\n" +
            (userInput.length > 140
                ? "Note: Your text exceeds 140 characters and has been truncated."
                : "Your text is within the limit of 140 characters.")
        );
    } else {
        alert("No text was entered.");
    }
}

// Run the function
checkTweetLength();
