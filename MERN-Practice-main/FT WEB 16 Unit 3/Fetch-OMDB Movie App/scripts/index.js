let cont = document.getElementById("container")
let error = document.createElement("img")
//error.src="https://media4.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif?cid=790b76112c75983d38066482c1cc31ed5822106591511c43&rid=giphy.gif&ct=g"
let con=document.createElement("p")
 con.innerText="Maaf kar Bhai! ye nahi hai kuch aur dekh le"
error.src="https://media4.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif?cid=790b76112c75983d38066482c1cc31ed5822106591511c43&rid=giphy.gif&ct=g"
var data;
 async function get(){
    let search = document.getElementById("search").value;
    try {
        let res= await fetch(`https://www.omdbapi.com/?s=${search}&apikey=fb68bfc5`)
          data = await res.json();
           console.log(data)
            if(search!==""){
                        
if(data.Response==="True"){
  display(data.Search)
}

else{
cont.innerHTML=""
cont.append(error,con)
}
            }
            else{
              cont.innerHTML=""
            }
        
    }
    catch(err) {
        console.log(err)
    }
 }
 
  
 function display(data){
      data.forEach(function(el){
          cont.innerHTML=""
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        img.src=el.Poster
        let h3 = document.createElement("h3");
        h3.innerText=el.Title
        let h4 = document.createElement("h4")
        h4.innerText="Released in"+el.Year
        let h5 = document.createElement("h5");
        h5.innerText="Rating: 8.0"

        div2.append(h3,h4,h5)
        div1.append(img,div2);
      
       if(el.Poster=="N/A"){
        console.log("hello  ")
       
        cont.append(error,con)

    }
      else{
        cont.append(div1)
      }
  })
 }

//  function search1(){
//    let a = document.querySelector("input").value;
//     console.log(a);
//      let searchIt= data.filter(function(el){
//          return  el.Title.includes(a)
//      })
//      console.log(searchIt);
//      display(searchIt)
//  }
