//--------------------------------slideshow----------------------------------
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
 // ------------------------------- slideshow end----------------------------------
  
// -----------------------------------------------search------------------------------

const get = async() => {
    try {
        let search = document.getElementById("search").value;
        let res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`);
        let data = await res.json();
        console.log(data)
        append(data.meals)
        
    }
    catch(err) {
        console.log(err)
    }
  }
  let list = document.getElementById("list")
  function append(data){
         let search = document.getElementById("search").value;

      list.innerHTML=""
      data.map(function(el){
        let p = document.createElement("p")
        p.innerText= el.strMeal;
        list.append(p)
        p.addEventListener("click",function(){
            document.getElementById("box").innerHTML="";
            let img = document.createElement("img");
            img.src=el.strMealThumb;
            let p1= document.createElement("h3")
             p1.innerText = p.innerText;
             let p2 = document.createElement("h6");
             p2.innerText="Ingredients Used"
             let p3 = document.createElement("p");
             p3.innerText=el.strIngredient1+", "+el.strIngredient1+", "+el.strIngredient2+", "+el.strIngredient3+", "+el.strIngredient4+", "+el.strIngredient5+", "+el.strIngredient6+", "+el.strIngredient7+", "+el.strIngredient8+", "+el.strIngredient9+", "+el.strIngredient10
             let p4 = document.createElement("h5");
             p4.innerText="Category : "+el.strCategory;
             let a = document.createElement("a");
             a.href=el.strYoutube;
             a.innerText="See Recipe Here"
             let div = document.createElement("div")
             let div1 = document.createElement("div")
             div.style.display="flex";
             div1.append(p1,p4,p2,p3,a)
             div1.setAttribute("id",'box1')
             div.append(img,div1);
             document.getElementById("box").append(div)
        })
      })
      if(search!==""){
          list.style.display="block"
      }
      else{
        list.style.display="none"
      }
      if(data.length>6){
          list.style.overflowY="scroll"
      }
      else{
        list.style.overflowY="hidden"
      }
  }
   document.onclick=(event) => {
       if(event.target.id !== search){
           list.style.display="none"
       }
   }
  //---------------------------------------searchbar end----------------

