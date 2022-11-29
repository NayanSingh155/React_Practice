var dataArr = JSON.parse(localStorage.getItem("studentDataBase"));
var admitted1 = JSON.parse(localStorage.getItem("admitted")) || [];
var rejected1 = JSON.parse(localStorage.getItem("rejected")) || [];




dataArr.map(function (elem, index) {
  var row = document.createElement("tr");

  var col1 = document.createElement("td");
  col1.innerText = elem.name;

  var col2 = document.createElement("td");
  col2.innerText = elem.age;

  var col3 = document.createElement("td");
  col3.innerText = elem.gender;
  var col4 = document.createElement("td");
  col4.innerText = elem.email;
  var col5 = document.createElement("td");
  col5.innerText = elem.phone;

  var col6 = document.createElement("button");
  col6.innerText = "Admit";
  
  var col7 = document.createElement("button");
  col7.innerText = "Reject";
  col6.addEventListener("click", function () {
    markadmit(elem);
  });
  col7.addEventListener("click", function () {
    markreject(elem);
  });

  row.append(col1, col2, col3, col4,col5,col6);

  document.querySelector("#body").append(row);
});

function markadmit(elem) {
  console.log(elem);
  admitted1.push(elem);
  localStorage.setItem("admitted", JSON.stringify(admitted1));
}

function markreject(elem) {
    console.log(elem);
    rejected1.push(elem);
    localStorage.setItem("admitted", JSON.stringify(rejected1));
  }
