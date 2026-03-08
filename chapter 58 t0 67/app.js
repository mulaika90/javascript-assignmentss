var mainContent = document.getElementById("main-content");
console.log(mainContent)
var mainContent = document.getElementById("main-content");

document.write(mainContent.childNodes[1].innerHTML + "<br>");
document.write(mainContent.childNodes[3].innerHTML + "<br>");
document.write(mainContent.childNodes[5].innerHTML + "<br>");
document.write(mainContent.childNodes[7].innerHTML + "<br>");
document.write(mainContent.childNodes[9].innerHTML + "<br>");
var renderElements = document.getElementsByClassName("render");
console.log(renderElements);

var formContent = document.getElementById("form-content");

console.log(formContent.nodeType);
var lastName = document.getElementById("lastName");

console.log(lastName.nodeType);
console.log(lastName.childNodes[0].nodeType);

var lastName = document.getElementById("lastName");

lastName.childNodes[0].nodeValue = "Last Name: Ahmed";

var mainContent = document.getElementById("main-content");

console.log(mainContent.firstChild);
console.log(mainContent.lastChild);

var lastName = document.getElementById("lastName");

console.log(lastName.nextElementSibling);
console.log(lastName.previousElementSibling);

var email = document.getElementById("email");

console.log(email.parentNode);
console.log(email.parentNode.nodeType);

var mainContent = document.getElementById("main-content");

console.log(mainContent.childNodes[1]);