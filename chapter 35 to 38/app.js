function greet(){
    var date = new Date()
    console.log(date);
    
}
greet()
function greetUser() {
  var firstName = prompt("Enter your first name:");
  var lastName = prompt("Enter your last name:");
  console.log(firstName,lastName);
  
}
greetUser()
function calculation(num1,num2,operator){
    var operation;
    if(operator == "+"){
        operation = num1 + num2;
    }else if(operator == "-") {
        operation = num1 - num2;
    }else if(operator == "*") {
        operation = num1 * num2;
    }else if(operator == "/") {
        operation = num1 / num2;
    } 
    else{
        operation = "invalid operator"
    }
    



}
var userNum1 = Number(prompt("enter a number"))
var userNum2 = Number(prompt("enter a  another number"))
var userOperator = (prompt("enter a operator(+,-,*,/)"))

console.log(calculation(userNum1,userNum2,userOperator));

function calculatesquare(x){
    return x**2
}
console.log(calculatesquare(5));

function factorial(n){
    var result = 1
    for(var i = 1; i<=n; i++){
        result == result*1
        return result
    }
}
console.log(factorial(5));




