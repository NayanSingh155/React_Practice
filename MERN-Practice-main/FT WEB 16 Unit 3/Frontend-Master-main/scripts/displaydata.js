import navbar from "../components/navbar.js";
import footer from "../components/footer.js";


// Header & Footer
let header = document.querySelector(".header");
let footer_container = document.querySelector("#footer");
header.innerHTML = navbar();
footer_container.innerHTML = footer();
document.querySelector("#footer").innerHTML = footer();

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
function getIt(tag,id){
    tag=document.createElement(tag);
    tag.setAttribute("id",id)
    return tag;
}
let con1 = document.getElementById("con1")
let data = JSON.parse(localStorage.getItem("displaydata"))
function name() {
    document.getElementById("con1").innerHTML=""
    data.map(function(el){
        let img = getIt("img","img")
        img.src=el.img
        let title = getIt("h1","title")
        title.innerText=el.name
        let div = getIt("div","div")
        let div1 = getIt("div","div1")
        let div2 = getIt("div","div2")
        let img1 = getIt("img","img1")
        img1.src=el.photo;
        let name = getIt("h3","name")
        name.innerText=el.title
        let com = getIt("h5","com")
        com.innerText=el.com
        let des = getIt("p","time")
        des.innerText=el.time
        let div3 = getIt("div","div3")
        let div5 = getIt("div","div5")
        let div6 = getIt("div","div6")
        div6.innerText="CC"
        div5.append(des,div6)
        div3.append(name,com)
        div2.append(img1,div3)
        div1.append(title,div2,div5)
        div.append(img,div1)
        con1.append(div)
      })
}

function name1(){
    document.getElementById("con2").innerHTML="";
    data.map(function(el){
        let box = getIt("div","box")
        let iframe = getIt("iframe","iframe")
        let box1 = getIt("div","box1");
        let p = getIt("p","p");
        p.innerText=el.d;
        iframe.src=el.src;
        iframe.allow="fullscreen"
        iframe.height="300px"
        iframe.width="600px"
        let btn =getIt("button","btn");
        btn.innerText="Get Unlimited Access Now"
        box1.append(p,btn)
        btn.addEventListener("click",function(){
            window.location.href="joinnow.html"
        })
        box.append(iframe,box1)
        document.getElementById("con2").append(box)

    })
}
name()
name1()