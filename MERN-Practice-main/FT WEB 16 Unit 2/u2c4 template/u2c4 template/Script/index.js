document.querySelector("#form").addEventListener("submit", formSubmit);
var dataArr = JSON.parse(localStorage.getItem("studentDataBase")) || [];

function formSubmit(event) {
 
  var name = document.querySelector("#name").value;
  var age = document.querySelector("#age").value;
  var gender = document.querySelector("#gender").value;
  var email = document.querySelector("#email").value;

  var phone = document.querySelector("#phone").value;


 
  var dataObj = {
    name: name,
    age : age,
  gender:gender,
  email:email,
  phone:phone,
  };

  dataArr.push(dataObj);
  console.log(dataArr);
  localStorage.setItem("studentDataBase", JSON.stringify(dataArr));
}



