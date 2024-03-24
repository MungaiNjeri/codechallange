const prompt = require("prompt-sync")({sigint:true});
    let mark = prompt("Enter student marks (0-100): ", "0")
     mark = parseInt(mark);

     if (mark > 79 && mark <= 100) {
        console.log ("A")
      } else if (mark >= 60 && mark <= 79) {
        console.log ("B")
      } else if (mark >= 50 && mark <= 59) {
        console.log ("C")
      } else if (mark > 40 && mark <= 49) {
        console.log ("D")
      } else if (mark >= 0 && mark <= 40){
        console.log ("E")
      } else {
        console.log ("Please enter a value between 0 and 100.");
      }