function isLeap(year) {
    
    /**************Don't change the code above****************/    
    
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // Check if the year is divisible by 400
            if (year % 400 === 0) {
                console.log("Leap year.");
            } else {
                console.log("Not leap year.");
            }
        } else {
            console.log("Leap year.");
        }
    } else {
        console.log("Not leap year.");
    }

    /**************Don't change the code below****************/    
}

isLeap(2400); // Output: Leap year.