const get =  async (url)=> {
   try{
    let res =await fetch(url)
    let data = await res.json()
    return data;
}
catch(err){
console.log(err)
}
   }

   const append = (data,parent) => {
       parent.innerHTML="";
     data.map(({title,image,price}) => {
         let img = document.createElement("img");
          img.src=image;
         let title1=document.createElement("h3")
         title1.innerText=title
         let price1=document.createElement("h4")
         price1.innerText=price;
         let box=document.createElement("div");
         box.append(img,title1,price1)
            parent.append(box)
     })
  }

  export {get,append}