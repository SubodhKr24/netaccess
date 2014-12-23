document.addEventListener('DOMContentLoaded', function() {
  console.log("document content loaded.");
  var button = document.getElementById("oyy3");
  button.addEventListener('click', function() {
    console.log("the button is clicked.");
    var username = document.getElementById("oyy1").value;
    var password = document.getElementById("oyy2").value;
    alert("The username is :" + username + " and the password is : " + password + ".");
  });
});
