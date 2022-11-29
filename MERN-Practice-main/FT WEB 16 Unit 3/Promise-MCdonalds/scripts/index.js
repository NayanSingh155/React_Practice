var imgArr =[
    {img:"https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg"},
    {img :"https://wallpaperaccess.com/full/1972881.jpg"},
    {img:"https://media.istockphoto.com/photos/asian-chow-mein-noodles-picture-id483137365?k=20&m=483137365&s=612x612&w=0&h=UIFywfoyWSiEeg2CEtTZQ_GcW2z8Pj9fhxJU6EZFzA8="},
    {img:"https://media.gettyimages.com/photos/tasty-butter-chicken-curry-dish-from-indian-cuisine-picture-id1277362334?s=170667a"},
    {img:"https://thumbs.dreamstime.com/b/shai-pulao-vegetable-indian-biryani-31520269.jpg"}
]
//console.log(imgArr[0].img)
let id;
let a = document.querySelector("#slideshow");
let img1 = document.createElement("img");
img1.src=imgArr[0].img;
a.append(img1)
let i =1;
setInterval(function(){
if(i==imgArr.length){
    i=0;
}
a.innerHTML=""
let img1 = document.createElement("img");
img1.src=imgArr[i].img;
a.append(img1)
i++;
},4000)
document.getElementById("submit").addEventListener("click",function(event)
{
    event.preventDefault()
  
// let my = new Promise(function(resolve,reject){
    
//     if(val.value=="pizza"){
//         resolve("Hii")
//     }
//     else{
//     }
// },2000)
// my.then(function(res){
//     console.log(res)
// })
// my.catch(function(err){
//     console.log(err)
// })
 

let val = document.querySelector("input")
console.log(val)
})








