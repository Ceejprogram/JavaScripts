function fibonacciGenerator(n) {
    // Do NOT change any of the code above 👆

    // Initialize an array to hold the Fibonacci numbers
    let fibonacciArray = [];

    // Handle the case for n = 0
    if (n === 0) {
        return fibonacciArray; // returns an empty array
    }

    // Handle the case for n = 1
    if (n === 1) {
        fibonacciArray.push(0); // first Fibonacci number
        return fibonacciArray; // returns [0]
    }

    // For n >= 2, start with the first two Fibonacci numbers
    fibonacciArray.push(0); // first number
    fibonacciArray.push(1); // second number

    // Generate the Fibonacci sequence
    for (var i = 2; i < n; i++) {
        // The next Fibonacci number is the sum of the last two
        let nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }

    // Return the array of Fibonacci numbers
    return fibonacciArray;

    // Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(100));