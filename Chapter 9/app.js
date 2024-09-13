// // User Input & Conditional Statement 1
// var city= prompt("Enter Your City Name");
// if(city=="karachi"){
//     document.write("<center><h2>Welcome to The City of Lights</h2></center>");
// }

// // User Input & Conditional Statement 2
// var gender = prompt("Enter Your Gender");
// if(gender=="male"){
//     document.write("<center><h3>Good Morning Sir</center></h3>");
// }
// else if(gender=="female"){
//     document.write("<center><h3>Good Morning Ma'am</center></h3>");
// };

// // User Input & Conditional Statement 3
// var color = prompt("Enter Color of Traffic Signal");
// if(color=="red"){
//     document.write("<center><h1>Must Stop!!</h1></center>");
// }
// else if(color=="yellow"){
//     document.write("<center><h1>Ready To Move!!</h1></center>");
// }
// else if(color=="green"){
//     document.write("<center><h1>Move Now!!</h1></center>");
// }

// // User Input & Conditional Statement 4
// var fuel = prompt("Enter Your Remaining Fuel (in liters)");
// if(fuel<=0.25){
//     document.write("<center><h5>Please Refill Your Car</h5></center>");
// }

// User Input & Conditional Statement 6

var percentage;
var marks = prompt("Enter your Marks");
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total Marks: 300<br>");
document.write("Total Marks: "+marks);
percentage = (marks*100)/300;
document.write("<br>Percentage: "+percentage);

if(percentage>=80){
     document.write("<br>Grade: A-one");
     document.write("<br>Excellent");
     }
else if(percentage>=70){
     document.write("<br>Grade: A");
     document.write("<br>Good");
     }
else if(percentage>=60){
     document.write("<br>Grade: B");
     document.write("<br>You Need To improve");
     }
else if(percentage<60){
     document.write("<br>Grade: Fail");
     document.write("<br>Sorry");
     };


