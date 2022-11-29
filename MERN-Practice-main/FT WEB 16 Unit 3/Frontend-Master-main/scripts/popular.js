import navbar from "../components/navbar.js";
import footer from "../components/footer.js";






document.querySelector(".header").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

// Click Event on Hamburger Icon
const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});


const hamburger1  = document.querySelector(" #footer .menu");
  const navMenu1 = document.querySelector("#footer .mobile");
  hamburger1.addEventListener("click", function () {
    navMenu1.classList.toggle("active");
  });

function display(data,main){
    console.log(data)
main.innerHTML = null;

    data.map(function(el){
        let div = document.createElement("div");
        div.setAttribute("id","div")




        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id","mainDiv")

        let img = document.createElement("img")
        img.src=el.img
        img.setAttribute("id","img")

        let img1 = document.createElement("img")
        img1.src=el.photo
        img1.setAttribute("id","img1")

        let title = document.createElement("h1")
        title.innerText=el.title

        let titleDiv =document.createElement('div')
        titleDiv.id = "titleDiv"
        titleDiv.append(title)

        let nam = document.createElement("p");
        nam.innerText=el.name
        nam.id = "p"
        
        let nameDiv = document.createElement("div")
        nameDiv.setAttribute("id","nameDiv")
        
        let org = document.createElement("p");
        org.innerText=el.com
        org.id = "p1"

        nameDiv.append(nam,org)

        let outerDiv = document.createElement("div")
        outerDiv.setAttribute("id","outerDiv")
        outerDiv.append(img1,nameDiv)
        outerDiv.style.display="flex"
    
        let description = document.createElement("p");
        description.innerText=el.des
        description.setAttribute("id","description")
        description.setAttribute("id","desc")

        let descDiv =document.createElement('div')
         descDiv.id = "descDiv"
         descDiv.append(description)

        let time = document.createElement("p");
        time.innerText=el.time
        time.setAttribute("id","time")

        let timeDiv =document.createElement('div')
        timeDiv.setAttribute("id","timeDiv")
        timeDiv.append(time)

        // let CC = document.createElement("div")
        // CC.innerText="CC"
        // CC.setAttribute("id","CC")

        let caption = document.createElement("strong");
        caption.innerText = "CC";
        caption.className = "caption"

        let outerDiv2= document.createElement("div")
        outerDiv2.append(timeDiv,caption)
        outerDiv2.setAttribute("id","outerDiv2")
        outerDiv2.style.display="flex"

        let btn = document.createElement("button")
        btn.innerText="Watch Free Preview"
        let btn1 = document.createElement("button")
        btn1.innerText="Get Full Access"
        btn.setAttribute("id","btn")
        btn1.setAttribute("id","btn1")
        let btnDiv = document.createElement("div")
        btnDiv.append(btn,btn1)
        btnDiv.style.display="flex"
        btnDiv.setAttribute("id","btnDiv")

       mainDiv.append(titleDiv,outerDiv,descDiv,outerDiv2,btnDiv)
       div.append(img,mainDiv)
       div.addEventListener("click",function(){
           window.location.href="display.html"
           let displayArr=[];
           displayArr.push(el)
       })
       btn1.addEventListener("click",function(){
           window.location.href="joinnow.html"
       })
        main.append(div)
    })
}

export  {display};






function minidisplay(data,main){
    console.log(data)
main.innerHTML = null;

    data.map(function(el){
        let div = document.createElement("div");
        div.setAttribute("id","div")




        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id","mainDiv")

        let img = document.createElement("img")
        img.src=el.img
        img.setAttribute("id","img")

       
        let title = document.createElement("h1")
        title.innerText=el.title

        let titleDiv =document.createElement('div')
        titleDiv.id = "titleDiv"
        titleDiv.append(title)

        let nam = document.createElement("p");
        nam.innerText=el.name
        nam.id = "p"
        
        let nameDiv = document.createElement("div")
        nameDiv.setAttribute("id","nameDiv")
        
      

        nameDiv.append(title,nam)

      

       mainDiv.append(img,nameDiv)
       div.append(mainDiv)
       div.addEventListener("click",function(){
           window.location.href="display.html"
           let displayArr=[];
           displayArr.push(el)
       })
     
        main.append(div)
    })
}

export  {minidisplay};