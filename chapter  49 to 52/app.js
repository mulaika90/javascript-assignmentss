function submitForm() {
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

   document.getElementById('display').innerHTML =
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Password:</strong> " + password + "</p>";

}

 document.getElementById('about').innerHTML = "The rose is one of the most popular and beautiful flowers in the world, often referred to as the king of flowers queen of the garden"

 function read(){
    document.getElementById('about').innerHTML = "The rose is one of the most popular and beautiful flowers in the world, often referred to as the king of flowers or queen of the garden. Belonging to the Rosaceae family, this woody perennial flowering shrub is renowned for its velvety petals and intoxicating fragrance. While the traditional wild rose has only five petals, cultivated roses come in a vast array of shapes, sizes, and colors, including vibrant red, soft pink, white, yellow, orange, and even deep purple. A distinct feature of the rose plant is its stem, which is adorned with sharp prickles (commonly called thorns) Roses have held deep cultural significance for thousands of years, representing a diverse range of human emotions and ideals. Most notably, the red rose is recognized worldwide as the ultimate symbol of passionate love and romance. Beyond romance, different colors carry specific meanings: white roses symbolize purity and innocence, making them popular for weddings, while yellow roses signify friendship and joy. The flower has also been used throughout history as an emblem of power, such as in the English Wars of the Roses,and is often used in literature to represent hope, beauty, and sacrifice. "
       btn.parentNode.removeChild(btn);

 }
var selectedRow = null;

 function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function updateStudent(){
    selectedRow.cells[0].innerHTML = document.getElementById("editName").value;
    selectedRow.cells[1].innerHTML = document.getElementById("editAge").value;
    selectedRow.cells[2].innerHTML = document.getElementById("editCourse").value;
    document.getElementById("editForm").style.display = "none";
}

function editStudent(btn){
    document.getElementById("editName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("editAge").value = selectedRow.cells[1].innerHTML;
    document.getElementById("editCourse").value = selectedRow.cells[2].innerHTML;
    document.getElementById("editForm").style.display = "block";
}
