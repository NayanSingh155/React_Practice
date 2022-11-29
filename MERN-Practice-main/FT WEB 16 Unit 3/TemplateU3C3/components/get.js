let get =async (url) => {
  try{
      let  res = await fetch(url);
      let data =await  res.json();
      return data[0].vouchers;
  }
  catch (err){
      console.log(err)
  }
}

let append = (data,parent,child) => {
    parent.innerHTML=""
    data.map((el) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src=el.image;
        let name = document.createElement("h2");
        name.innerText=el.name;
        let price = document.createElement("h2");
        price.innerText=el.price
        let btn = document.createElement("button");
        btn.innerText="Buy";
        btn.setAttribute("id","buy")
        div.append(img,name,price,btn)
        parent.append(div)
        btn.addEventListener("click",function(){
            let value = +localStorage.getItem("wallet");
            if(value>0 && value>price.innerText){
                value = value-price.innerText
                console.log(value)
                localStorage.setItem("wallet",value)
                         child.innerText=value;
            }
            else{
                alert("Insufficient Balance")
            }
            

            let arr =JSON.parse( localStorage.getItem("purchases")) || [];
            let obj = {
                name:name.innerText,
                price:price.innerText,
                image:img.src
            }
            arr.push(obj)
            localStorage.setItem("purchases",JSON.stringify(arr))
        })
    })
}

export {get,append}