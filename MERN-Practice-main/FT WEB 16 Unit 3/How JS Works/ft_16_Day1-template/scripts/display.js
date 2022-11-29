//here retrieve the generated number from Localstorage.
var a = localStorage.getItem("number");
var b = document.getElementById("show_number");
b.innerText=a;
if(a==6){
b.style.background="green"
}
else if(a==1){
    b.style.background="yellow"

}
else{
    b.style.background="red"

}
