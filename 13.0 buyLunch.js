function whosPaying(names) {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * names.length);
    
    // Select the name at the random index
    const selectedName = names[randomIndex];
    
    // Format the output string
    return `${selectedName} is going to buy lunch today!`;
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));