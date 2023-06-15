function sayHello() {
  alert("WELCOME TO MY WORLD!!~");
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var alertMessage =
    "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
  alert(alertMessage);

  /** Setelah melakukan submit maka value input tersebut tereset */
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
