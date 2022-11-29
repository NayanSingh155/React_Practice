//store the products array in localstorage as "products"
var proArr=JSON.parse(localStorage.getItem("products")) || [];
document.querySelector("#myForm").addEventListener("submit",function(event){
event.preventDefault();
function data(){
this.name=document.querySelector("#name").value
this.price=document.querySelector("#price").value
this.type=document.querySelector("#type").value
this.image=document.querySelector("#image").value
}
var obj = new data()
console.log(obj)
proArr.push(obj);
if(document.querySelectorAll("input").value !== ""){
    localStorage.setItem("products",JSON.stringify(proArr));
}

})
document.querySelector("#show_products").addEventListener("click",function(){
    window.location.href="inventory.html"
})