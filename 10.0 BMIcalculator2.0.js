function bmiCalculator(weight, height) {
    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Determine the message based on the BMI value
    let interpretation;
    const bmiFormatted = bmi % 1 === 0 ? bmi.toFixed(0) : bmi.toFixed(1); // Format BMI based on whether it's a whole number

    if (bmi < 18.5) {
        interpretation = `Your BMI is ${bmiFormatted}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = `Your BMI is ${bmiFormatted}, so you have a normal weight.`;
    } else {
        interpretation = `Your BMI is ${bmiFormatted}, so you are overweight.`;
    }
    
    return interpretation;
}