var titled= prompt("enter your first name")
var enyer= prompt("enter your last name")
var fullname = titled+" "+enyer;
console.log(fullname);
console.log("welcome to our website");
var mobile = prompt("enter your mobile phone model")
console.log(mobile.length);
document.write("<p>My favourite phone is : samsung galaxy</p>")
document.write(mobile.length)
var single = "pakistani"
console.log(single.indexOf("n"));
document.write("<p>string : pakistani</p>")
document.write("<p>index of N : 7</p>")
var mess = "Hello world"
console.log(mess.lastIndexOf("l"));
document.write("<p>string : hello world</p>")
document.write("<p>last index of l : 9")
var word = "pakistani"
console.log(word.charAt(3));
document.write("<p>string : pakistani</p>")
document.write("<p>character at index 3 is I</p>")
var repa= prompt("enter your first name")
var now= prompt("enter your last name")
console.log(repa.concat(now));
var city = "hyderabad"
console.log(city.replace("hyderabad","islamabad"))
document.write("<p>city : hyderabad</p>")
document.write("<p>after replacement : islamabad</p>")
var message = "sara and sana are best friends. they play with dolls and kitchen set"
console.log(message.replaceAll("and","&"));
var num = "472"
console.log(num.replace("472","472"));
document.write("<p>value : 472</p>")
document.write("<p>Type : string</p>")
document.write("<p>value : 472</p>")
document.write("<p>Type : number</p>")
var input = prompt("enter your favourite dry fruit name")
console.log(input.toUpperCase());
document.write("<p>User input : peanuts")
document.write("<p>uppercase : Peanuts</p>")
var enter = prompt("enter you favourite course")
//console.log(enter.toTitleCase());
//document.write("<p>user input : JAVASCRIPT</p>")
//document.write("<p>result : Javascript</p>")
var num2 = "35.36"
console.log(num2.replace(".",""));
document.write("<p>num : 35.36</p>")
document.write("<p>result : 3536</p>")
var fill = prompt("enter your user name")
if(fill === "letters"){
    console.log("good");
    
}else{
    alert("enter a valid passwrord");
}
var arr = ["applepie","chips","cookie","patties"]
var search = prompt("what do you want to order")
console.log(search.toLowerCase());
if(search == arr){
    console.log("okay");
    
}else{
    console.log("not availble");
    
}
document.write(`<p>cookie is available at index 2 </p>`)
document.write(`<p>pastry is not available</p>`)
var pass = prompt("please enter a password")
if(pass === "number"){
    console.log("great");
    
}else if(pass === "alphabets"){
    console.log("great");
    
}else if(pass === "start with number"){
    console.log("enter a valid password");
    
}else if(pass === "6 characters"){
    console.log("enter a valid password");
    
}else{
    alert("enter a valid password")
}
var sen = "university of karachi"
console.log(sen.split(""));
var city = "star"
console.log(city.charAt("1"));






























