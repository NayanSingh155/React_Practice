async function get(){
    try{
        let res = await fetch("https://masai-food-api.herokuapp.com/api/meals/india")
       let data =await res.json()
        console.log(data[0])
        display(data[0].meals)
    }
    catch(err){
        console.log(err)
    }
}
get()

function display(data){
    data.forEach(function(el){
       // console.log(e.meals.length)
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src=el.strMealThumb
        let name = document.createElement("h3")
        name.innerText=el.strMeal
        let price = document.createElement("h5")
        price.innerText=el.price;
        let btn = document.createElement("buttton");
        btn.innerText="Add to Cart";
        let p = el.odMeal;
        btn.setAttribute("id","addtocart")
        btn.addEventListener("click",function(){
            let arr =JSON.parse( localStorage.getItem("cart")) || [];
            let obj = {
                img:el.strMealThumb,
                name:name.innerText,
                price:price.innerText
            }
            arr.push(obj)
            console.log(arr)
           localStorage.setItem("cart",JSON.stringify(arr))
           document.getElementById("count").innerText=arr.length;
        })
        div.append(img,name,price,btn)
        document.getElementById("menu").append(div)

        

    })
}