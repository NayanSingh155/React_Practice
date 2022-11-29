document.querySelector("#form").addEventListener("submit", myFormSubmit);

var signupArr = [];
function myFormSubmit(event) {
  event.preventDefault();
  var signupObj = {
    name: document.querySelector("#name").value,
  mob: document.querySelector("#phone").value,
     email: document.querySelector("#email").value,
   
    pass: document.querySelector("#pass").value,
  };
  
 
  if( signupObj.pass.length>=8 &&  signupObj.name !== "" && signupObj.mob !== "" && signupObj.user !== "" && signupObj.pass !== "" && signupObj.email !== ""){
    signupArr.push(signupObj);
  console.log(signupArr);
  localStorage.setItem("signUpDetails", JSON.stringify(signupArr));
  alert(" Succesfully Sign Up")
  window.location.href="login.html"


  }
 else{
   alert("Please Fill the details correctly")
 }

  
}