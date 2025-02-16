function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  
    // Calculate the number of bottles the robot can buy
    const numberOfBottles = Math.floor(money / costPerBottle);
    console.log("The robot can buy " + numberOfBottles + " bottles of milk.");
  }
  
  // Example usage:
  getMilk(10, 1.5); // This will output: The robot can buy 6 bottles of milk.