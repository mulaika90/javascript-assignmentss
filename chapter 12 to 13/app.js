var asciicode;
if(asciicode == "65"){
    asciicode = "65 is an uppercase";
    
}
if(asciicode == "90"){
      asciicode = "90 is an uppercase"
}
if(asciicode == "97"){
    asciicode = "97 is an lowercase"
}
if(asciicode == "122"){
    asciicode = "122 is an lowercase"
}
var greeting;
var hour = 13;
if(hour < 18){
    greeting = "Good day";
}else{
    greeting = "good evening"
}
var integer = -2 > -1;
if(-2 == -1){
    integer = "they are not equal"
    
    
}
var maze;
var character;
if(character == "a" || character == "e" || character == "i" || character == "o" || character =="u" ){
    maze = "true";
}
else{
    maze = "false";
    
}
var num = prompt("enter your number");
if(num > 0){
    console.log("number is positive");
    
}
var correct = "123456";
var input = prompt("enter password");
if(input == "no password"){
    console.log("please enter your password");
    
}
else if(input == correct){
    console.log("correct");
    
}
else{
    console.log("wrong password");
    
}
var time = prompt("enter time in 24 houre format")
if(time >= 0 && time < 1200){
    console.log("AM");
    
}
else if(time >= 12 && time < 9){
    console.log("good afternoon(PM)");
    
}
else if(time >= 5 && time < 5){
    console.log("goode evening(PM)");
    
}
else if(time >= 9 && time < 10){
    console.log("good night(PM)");
}
else{
    console.log("in valid time");
    
}

    


