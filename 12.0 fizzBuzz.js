var output = [];
var count = 1; // Keeps track of the next number

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }

    count++; // Increment for the next function call
    console.log(output);
}

// Call fizzBuzz() multiple times to see the sequence grow
