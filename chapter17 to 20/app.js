var empty = [[]]
console.log(empty);
var matrix = [[0 ,1 ,2 ,3],[1 ,0 ,1 ,2],[2 ,1 ,0 ,1]]
console.log(matrix);
document.write(`<p>${matrix[0]}</p>`)
document.write(`<p>${matrix[1]}</p>`)
document.write(`<p>${matrix[2]}</p>`)

for( var i = 1; i <= 10; i++){
    console.log(i);
    document.write(`<p>${i}</p>`)
    
}
var arr = prompt("Enter a number to show its multiplication table")
var miss = prompt("Enter lenght multiplication table")
for (var i = 1; i <= 15; i++){
       document.write(` ${i} x 2 = ${i*2} <br>`)
}
 var fruits = ["apple","mango","banana","orange","grapes"]
 document.write(fruits+"<br>")
 for (var i = 0; i < fruits.length; i++) {
    document.write(`elments at index${i} is ${fruits[i]} <br>`)
 }
document.write("<h2>counting</h2>")
 for(var i = 0; i <= 15; i++){
    document.write(`${i}   `)
    
 }
 document.write("<h2>Reverse</h2>")
 for (var i = 10; i >= 1; i--) {
      document.write(`${i}   `)
 }
 var even = [0,2,4,6,8,10]
 document.write("<h2>even</h2>")
 for(var i = 0; i <= 10; i+=2){
    document.write(`${i} `)
 }
 document.write("<h2>odd</h2>")
 for (var i = 1; i <= 9; i+=2){
    document.write(`${i}  `)
 }

 document.write("<h2>series</h2>")
 for(var i = 0; i <= 20; i+=2){
    document.write(`${i}k   `)
 }


var items = ["cake","applepie","cookies"] 
console.log(items);
var userInput = prompt("welcome back to ABC bakery what do you want")
for(var i = 0; i < items.length; i++){
 if(items[i] === userInput){
        document.write (userInput+" is available at index"+i+"in our bakery<br>");

   }
   else{
      document.write (userInput+" is not available in our bakery<br>");

   }
}




var arr = [24,53,78,12]
document.write(arr)
 document.write("<p>largest number is 78</p>")
document.write("<p>smallest number is 12</p>")





