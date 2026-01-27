var date = new Date()
console.log(date);
document.write(date+"<br>")
var miss = ["January","february","march","april","may","june","july","august","september","october","november","december"]
var date = new Date()
var now = date.getMonth()
console.log(miss[now]);
document.write(miss[0]);
var state = new Date()
statestr = state.toString()
var day = statestr.slice(0,4)
console.log(day);
document.write("<p>today is sun</p>")
var promise = ["staturday","sunday"]
var ask = prompt("enter day")
if(promise === promise){
    console.log("it is fun day");
    
}else if(promise === promise){
    console.log("it is fun day");
    
}else{
    console.log("bad day");
    
}
document.write("<p>It is fun day</p>")
var day;

if (day <= 15) {
  console.log("First fifteen days of the month");
} else {
  console.log("last day");
}

var state = new Date()
console.log(state);
var milli = state.getTime()
console.log(milli);
document.write("<p>Escaped milliseconds since JAN 1,1970</p>"+milli)
var min = milli/(1000*60)
console.log(min);
var now = new Date();       // get current date and time
var hours = now.getHours(); // get the hour (0-23)

if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

var laterDate = new Date(2020, 11, 31); 

console.log(laterDate);

var ramadanStart = new Date(2015, 5, 18); 


var today = new Date();

var diffMilli = today - ramadanStart;


var daysPassed = Math.floor(diffMilli / (1000 * 60 * 60 * 24));


document.write("<p>Days passed since 1st Ramadan:</p> " + daysPassed);

var referenceDate = new Date();


var start2015 = new Date(2015, 0, 1)
var diffMilli = referenceDate - start2015;

var secondsElapsed = Math.floor(diffMilli / 1000);


document.write("<p>Seconds elapsed since January 1, 2015</p> " + secondsElapsed);
var currentDate = new Date();


var currentHours = currentDate.getHours();
console.log("Current Hours: " + currentHours);


currentDate.setHours(currentHours + 1);
document.write("<p>Date and time one hour ahead:</p> " + currentDate);
// 1. Ask the user for their age
var age = prompt("Enter your age:");

// 2. Get the current year
var currentYear = new Date().getFullYear();

// 3. Calculate birth year
var birthYear = currentYear - age;


document.write("<p>Your birth year is: </p>" + birthYear);















