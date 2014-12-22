function alert(e) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username);
  console.log(password);
}

var button = document.querySelector(".submit"); 
button.addEventListener('click', alert);
