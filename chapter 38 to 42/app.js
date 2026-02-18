function customPower(a, b) {
  var result; 

  for (var i = 1; i <= b; i++) {
    result = result * a; 
  }

  return result; 
}
console.log(customPower(2, 3)); 
function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 === 0){
        return true; 
    } else {
        return false; 
    }
}

console.log(isLeapYear(2020)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(2023)); 
function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;        
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
    return area;
}


console.log(triangleArea(3, 4, 5)); 
console.log(triangleArea(7, 8, 9)); 



function average() {
    console.log(obtained%3);
    
}

function percentage() {
    var totalMarks = 300; 
    var obtained = 250;
    console.log((obtained / totalMarks) * 100 + "%");
     
}
percentage()

function customIndexOf(str, searchChar, start = 0) {
    for (var i = start; i < str.length; i++) {
        if (str[i] === searchChar) {
            return i; 
        }
    }
    return -1; 
}
console.log(customIndexOf("world", "d"));  
function removeVowels(sentence) {
    return sentence.replaceAll("a,e,i,o,u" ,'');
}

var text = "Hello, how are you doing today?";
var result = removeVowels(text);
console.log(result);
function convertAllDistances(km){

 var conversionRates = {meters: 1000,
        centimeters: 100000,
        feet: 3280.84,
        inches: 39370.1
   }  ;
   

if(conversionRates=="meters"){
   console.log( convertAllDistances*meters);
   
}else if(conversionRates=="centimeters"){
    console.log(convertAllDistances*centimeters);
    
}else if(conversionRates=="feet"){
    console.log(convertAllDistances*feet);
    
}else if(conversionRates=="inches"){
    console.log(convertAllDistances*inches);
    
}else{
    console.log("not define");
    
}
}
convertAllDistances("5");
var hoursWorked = parseInt(prompt("Enter total hours worked:"));
var overtimePay = 0;

if (hoursWorked > 40) {
    var overtimeHours = hoursWorked - 40;
    overtimePay = overtimeHours * 12;
}

alert("Overtime Pay is Rs. " + overtimePay);
var amount = (prompt("Enter amount to withdraw:"));

var note100 = Math.floor(amount / 100);
var remainder = amount % 100;

var note50 = Math.floor(remainder / 50);
remainder = remainder % 50;

var note10 = Math.floor(remainder / 10);

console.log(
     "100 Notes: " + note100 + "\n" +
    "50 Notes: " + note50 + "\n" +
    "10 Notes: " + note10
);



   






