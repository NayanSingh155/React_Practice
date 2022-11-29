document.getElementById("submit").addEventListener("click",function(){
   let name = document.getElementById("name")
   let number = document.getElementById("number")
   let address = document.getElementById("address")
   console.log(name.value)
   if(name.value!=="" && number.value !=="" && address.value !==""){
    alert(" Your order is accepted ")
    setTimeout(function(){
        alert("Your order is being cooked ")
    },3000)
    setTimeout(function(){
        alert("Your order is ready ")
    },8000)
    setTimeout(function(){
        alert(" Order out for delivery ")
    },10000)
    
    setTimeout(function(){
        alert(" Order delivered ")
    },12000)
   }
   else{
       alert("Fill The Details")
   }
})