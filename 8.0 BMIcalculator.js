function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

// Get user input for weight and height
var weight = parseFloat(prompt("Enter your weight in kg:"));
var height = parseFloat(prompt("Enter your height in meters:"));

// Calculate BMI
var bmi = bmiCalculator(weight, height);

// Display the result
alert("Your BMI is: " + bmi);