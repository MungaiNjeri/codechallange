const prompt = require("prompt-sync")({sigint:true});
    let speedLimit = prompt("Enter speed limit (0-70):", "0")
     speedLimit = parseInt(speedLimit);





function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
   const pointsperkmOver = 2;
   const demeritPoints = 0;
    const demeritPointsLimit = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const speedAboveLimit = speed - speedLimit;
      const  demeritPoints = Math.floor(speedAboveLimit / kmPerDemeritPoint) * pointsperkmOver

        if (demeritPoints > demeritPointsLimit) {
            console.log("License suspended");
        } else {
            console.log("Points:", demeritPoints);
        }
    }
}

// Example usage:
calculateDemeritPoints(80); // Output: Points: 2
calculateDemeritPoints(65); // Output: Ok
calculateDemeritPoints(100); // Output: License suspended