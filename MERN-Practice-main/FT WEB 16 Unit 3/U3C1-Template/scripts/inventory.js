document.querySelector("#add_products").addEventListener("click",function(){
    window.location.href="index.html"
})

var data = JSON.parse(localStorage.getItem("products"));
data.map(function(elem){
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src",elem.image);
    img.setAttribute("id","img1")
    var name1 = document.createElement("h2");
    name1.innerText=elem.name;
    var h3 = document.createElement('h3');
    h3.innerText=elem.type;
    var price1 = document.createElement("h3");
    price1.innerText=elem.price;
    var re = document.createElement("button");
    re.innerText="Remove"
    box.append(img,name1,h3,price1,re);
   
    document.querySelector("#products_data").append(box)

})
re.addEventListener("click",function(){
  
    var x =  localStorage.removeItem();
    console.log(x)

  })
