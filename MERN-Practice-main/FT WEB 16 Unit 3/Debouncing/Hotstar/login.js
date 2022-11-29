var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
console.log(regdUsers);

document.querySelector("#form").addEventListener("submit", formSubmit);

var form = document.querySelector("#form");


function formSubmit(event) {
  event.preventDefault();

  var user = form.user.value;
  var pass = form.pass.value;
  console.log(user, pass);

  var flag= false;
  for (var i = 0; i < regdUsers.length; i++) {
    if (regdUsers[i].user == user && regdUsers[i].pass == pass) {
      flag=true;

    } 
  }
  if(flag==true){
      
      alert("Successfully Logged In")
      window.location.href="index.html";
  }
  else{
    alert("Invalid Credentials")

  }
} 