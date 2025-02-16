function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
    
        const maxAge = 90;
        const yearsLeft = maxAge - age;
    
        const daysLeft = yearsLeft * 365;
        const weeksLeft = yearsLeft * 52;
        const monthsLeft = yearsLeft * 12;
    
        console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(56);
    