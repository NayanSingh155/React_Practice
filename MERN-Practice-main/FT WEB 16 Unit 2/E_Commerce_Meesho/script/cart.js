var cartArray = JSON.parse(localStorage.getItem("cartDetails")) || [];
console.log(cartArray)


 function displayData(cartArray) {
    cartArray.map(function(elem,index,array){
        var box4=document.createElement("div")
        box4.setAttribute("id","box4")
          var box1 = document.createElement("img");
          box1.setAttribute("src",elem.image_url);
          var box2=document.createElement("h3");
          box2.innerText=elem.name;
          var box6 = document.createElement("div");
         var btn = document.createElement("button");
        btn.innerText="Add +1"
        btn.addEventListener("click",function(){
           addqty(index);
        })
        var btn3 = document.createElement("button");
        btn3.innerText="Remove -1"
        btn3.addEventListener("click",function(){
           lessqty(index);
        })
        btn.setAttribute("id","btn")
        
        btn3.setAttribute("id","btn3")
          var qty=document.createElement("h5");
          qty.innerText="qty : "+elem.qty;
          box6.append(qty,btn);
          box6.setAttribute("id","box6")
          box2.append(box6,btn3)
          var box5 =document.createElement("div");
          box5.append(box2);
          box5.setAttribute("id","box5")
          var price = document.createElement("h4");
          price.innerText=elem.price;
          box4.append(box1,box5,price)
          document.querySelector("#box").append(box4);
          
          });
          
         
         
       
    
 }
 function showTotal(){
    var total = cartArray.reduce(function(acc,elem){
        return acc+elem.price
    },0)
    var box7 = document.createElement("div");
    var head = document.createElement("h2");
    head.innerText="Total :"
    var t1=document.createElement("h2")
    t1.innerText=total
    box7.append(head,t1);
    box7.setAttribute("id","box7")
    document.querySelector("body").append(box7);
     
    var btn2 = document.createElement("button");
    btn2.innerText="Continue To Buy";
    document.querySelector("body").append(btn2);
    btn2.setAttribute("id","btn2")
    btn2.addEventListener("click",function(){
        window.location.href="pay.html";
    })
 }
 displayData(cartArray);
 showTotal();
 function addqty(index){
    console.log(index);
    cartArray[index].qty++;
    console.log(cartArray);
    localStorage.setItem("cartDetails",JSON.stringify(cartArray));
    console.log(cartArray)
    displayData(cartArray);
    showTotal;
}
function lessqty(index){
    console.log(index);
    cartArray[index].qty--;
    console.log(cartArray);
    localStorage.setItem("cartDetails",JSON.stringify(cartArray));
    console.log(cartArray)
   displayData(cartArray);
   showTotal;
    
   
}