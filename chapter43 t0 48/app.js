function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
var counter = 0;

function increase() {
  var add = counter++
    document.getElementById("count").innerText = counter;
}

function decrease() {
    var sub = counter--;
    document.getElementById("count").innerText = counter;
}
