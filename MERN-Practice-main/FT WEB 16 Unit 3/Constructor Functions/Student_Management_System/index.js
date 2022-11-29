var array=JSON.parse(localStorage.getItem("studentData")) || [];
//  var name =document.getElementById("name").value;
//  var phone =document.getElementById("phone").value;
//  var city =document.getElementById("city").value;

document.getElementById("myForm").addEventListener("submit",function(){
    event.preventDefault();
    function data(){
        this.name=document.getElementById("name").value;
        this.phone=document.getElementById("phone").value;
        this.city=document.getElementById("city").value;
    }
    var obj = new data()
    console.log(obj)
   array.push(obj);
   localStorage.setItem("studentData",JSON.stringify(array))
   window.location.href="index1.html"
})

 


