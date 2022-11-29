async function apiCall(url) {
     

    //add api call logic here
    
   
        try{
          let res = await fetch(url)
        let articles = await res.json()
        // console.log(data)
        return articles;
        
        }
        catch(err){
          console.log(err)
        }
      

}


function appendArticles(articles, main) {

    //add append logic here
 articles.forEach(function(el){
     
    let div = document.createElement("div")
    div.style.display="flex"
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")
    div1.innerText=el.title;
    div2.innerText=el.description;
    let img = document.createElement("img");
    img.src=el.urlToImage;
    div3.append(img)
    div.append(div1,div2,div3)
    main.append(div)
    
    div.addEventListener("click",function(){
        let arr = []
        arr.push(el)
        window.location.href="blog.html"
        localStorage.setItem("article",JSON.stringify(arr))
    })
 })
    
}

export { apiCall, appendArticles }