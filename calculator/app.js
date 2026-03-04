function writeonly(cha){
   document.getElementById("input").value += cha
}
function clearinput(){
    document.getElementById("input").value = ""
}
function deletecha(){
 var words = document.getElementById("input").value
  var finallength = words.slice(0,-1)
  document.getElementById("input").value=finallength

}
let input = document.getElementById("input")
function calculate(){
    try{
        input.value = eval(input.value)
    }
    catch{
        input.value="eror"
    }
}
function calculate(){
    var [firstnumber ,operator , lastnumber] = document.getElementById("input").value.split("")
    var firstnumber  = Number(firstnumber)
    var lastnumber  = Number(lastnumber)
    if(operator == "-"){
        document.getElementById("input").value=firstnumber-lastnumber
    }else if(operator=="+"){
        document.getElementById("input").value
    }

}


