var a = "3";
var b = "8";

// Switch the values
var temp = a; // Store the value of a in a temporary variable
a = b;        // Assign the value of b to a
b = temp;    // Assign the value of temp (original a) to b

// Output the results
console.log("a is " + a);
console.log("b is " + b);