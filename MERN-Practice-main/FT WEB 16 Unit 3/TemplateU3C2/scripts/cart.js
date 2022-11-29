let data = JSON.parse(localStorage.getItem("cart"));
console.log(data)
let total =0;
 function display(data){
    data.map(function(el){
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src=el.img
        let name = document.createElement("h3")
        name.innerText=el.name
        let price = document.createElement("h5")
        price.innerText=el.price;
        let btn = document.createElement("buttton");
        btn.innerText="Remove";
       btn.setAttribute("id","remove")
       total = total + Number(el.price);
       btn.addEventListener("click",function(){
           total = total -  Number(price.innerText);
           console.log(total)
           document.getElementById("total-price").innerText=total
           div.innerHTML=null
           window.localStorage.removeItem("cart.el")
       })
        div.append(img,name,price,btn)
        document.getElementById("cart").append(div)
       
        
    
    })
   
    document.getElementById("total-price").innerText=total
    
 } 
 display(data)