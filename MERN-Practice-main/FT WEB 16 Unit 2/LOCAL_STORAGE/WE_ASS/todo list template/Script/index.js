document.querySelector("#form").addEventListener("submit", formSubmit);
var todoArr = JSON.parse(localStorage.getItem("todoLocal")) || [];
function formSubmit(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var qty = document.querySelector("#qty").value;
  var priority = document.querySelector("#priority").value;

  console.log(name, qty, priority);

  var todoObj = {
    name: name,
    qty: qty,
    priority: priority,
  };
  //console.log(todoObj);
  todoArr.push(todoObj);
  console.log(todoArr);
  localStorage.setItem("todoLocal", JSON.stringify(todoArr));
}



