var bootcampArr =[
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-09-01-introduction-html/thumb.webp",
        name:"Introduction to HTML",
        photo:"https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",
        title:"Jen Kramer",
        com:"Freelance Instructor",
        des:"Learn the basics of HTML, like commonly-used elements and how to create a web page, how to add elements like links, headings, and images, and then practice your new skills by writing the markup for a book chapter.",
        time:"1 hours, 47 minutes",
        de:"Learn patterns for managing state throughout your React application."        

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-09-02-introduction-css/thumb.webp",
        name:"Introduction to CSS",
        photo:"https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",
        title:"Jen Kramer",
        com:"Freelance Instructor",
        time:"1 hours, 30 minutes",
        des:"Learn the basics of CSS, like how to import styles into an HTML file, how to target specific elements on a page using selectors, useful tools, how to add spacing to a page, and a few ways to create basic layouts. Then, practice your new skills by coding the layout for a blog page.",
        de:"Learn patterns for managing state throughout your React application."        

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-09-03-html-forms/thumb.webp",
        name:"HTML Forms",
        photo:"https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",
        title:"Jen Kramer",
        com:"Freelance Instructor",
        time:"2 hours, 47 minutes",
        de:"Learn patterns for managing state throughout your React application.",
        des:"Learn how to create forms using HTML and CSS. You’ll be able to differentiate between the different types of input fields that exist in HTML and when to use each one. Then, you’ll learn how to handle form submission, form submission issues, and form styling."                
       

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-09-04-embeds-github-pages/thumb.webp",
        name:"Website Embeds & GitHub Pages",
        photo:"https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",
        title:"Jen Kramer",
        com:"Freelance Instructor",
        time:"3 hours, 27 minutes",
        de:"Learn patterns for managing state throughout your React application.",
         des:"Learn how to leverage embedded web fonts and Google Maps into your web pages and how to host a website for free on GitHub Pages. Then, practice your new skills by creating a portfolio website."
   
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-09-05-calculator-html-css/thumb.webp",
        name:"Calculator Project: HTML & CSS",
        photo:"https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",
        title:"Jen Kramer",
        com:"Freelance Instructor",
        time:"3 hours, 10 minutes",
        de:"Learn patterns for managing state throughout your React application.",
        des:"Learn how to create the structure and appearance for the HTML and CSS of the calculator on iOS devices in the first part of the calculator exercise."
        
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-09-06-introduction-javascript/thumb.webp",
        name:"Introduction to JavaScript",
        photo:"https://static.frontendmasters.com/assets/teachers/holt/thumb@2x.webp",
        title:" Brian Holt",
        com:"Stripe",
        time:"4 hours, 20 minutes",

        de:"Learn patterns for managing state throughout your React application.",
       des:"Learn the basics of JavaScript, like its primitives, how to control the flow of a program, what scope is and why it matters, and data structures that can be used in programming. Then, practice your new skills in two exercises: by coding quiz questions that demonstrate important JavaScript concepts and by making a set of tests written in JavaScript pass. Finally, learn about the DOM, an essential part of building web pages."
    },
    {
        name:"Calculator Project: JavaScript",
        img:"https://static.frontendmasters.com/assets/courses/2019-09-07-calculator-javascript/thumb.webp",
        photo:"https://static.frontendmasters.com/assets/teachers/holt/thumb@2x.webp",
        title:" Brian Holt",
        com:"Stripe",
        time:"1 hours, 10 minutes",

        de:"Learn patterns for managing state throughout your React application.",
        des:"Learn how to create the underlying functionality for the JavaScript of the calculator on iOS devices in the final part of the calculator exercise. You’ll practice breaking a problem down into simple, achievable steps, and end up with a working calculator that performs basic math operations."
    },
    {
        photo:"https://static.frontendmasters.com/assets/teachers/holt/thumb@2x.webp",
        title:" Brian Holt",
        com:"Stripe",
        time:"3 hours, 30 minutes",

        de:"Learn patterns for managing state throughout your React application.",
        img:"https://static.frontendmasters.com/assets/courses/2019-09-08-javascript-in-websites/thumb.webp",
        name:"Using JavaScript in Websites",
        des:"Learn how to incorporate JavaScript into your websites by first seeing how to use third-party libraries and then creating two projects: an image carousel that uses JavaScript code, and then an application that retrieves data about dog breeds from an API."

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-09-09-web-game-project/thumb.webp",
        name:"Build a Game Project: Feed-A-Star-Mole",
        photo:"https://static.frontendmasters.com/assets/teachers/holt/thumb@2x.webp",
        title:" Brian Holt",
        com:"Stripe",
        time:"3 hours, 50 minutes",

        de:"Learn patterns for managing state throughout your React application.",
         des:"Build a working feed-a-star-mole game from the ground up that utilizes the skills you learned in previous bootcamp courses to structure, lay out, style, and add functionality to a group of hungry moles that appear and disappear as the user tries to feed them. The exercise is broken up into an introduction to what the final product will look like, the HTML and CSS solution for the game, and then the JavaScript solution."
    }
]
let main=document.getElementById("main")

import navbar from "../components/navbar.js"
   //  console.log(navbar)
    document.querySelector(".header").innerHTML=navbar()
    import footer from "../components/footer.js"

document.querySelector("#footer").innerHTML=footer()

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
    data.map(function(el){
        let plus1 = document.createElement("div")
        plus1.setAttribute("class","plus1")
        plus1.innerText="+"
        let line = document.createElement("div");
        line.setAttribute("id","line")
        let div = document.createElement("div");
        div.setAttribute("id","div")
        let div1 = document.createElement("div");
        div1.setAttribute("id","div1")
        let img = document.createElement("img")
        img.src=el.img
        img.setAttribute("id","img")
        let img1 = document.createElement("img")
        img1.src=el.photo
        img1.setAttribute("id","img1")
        let h3 = document.createElement("h3")
        h3.innerText=el.name
        let h4 = document.createElement("h4");
        h4.innerText=el.title
        let p = document.createElement("p");
        p.innerText=el.com
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        div3.append(h4,p)
        div2.append(img1,div3)
        div3.setAttribute("id","div3")
        div2.setAttribute("id","div2")
        div2.style.display="flex"
        p.setAttribute("id","p")
        let p1 = document.createElement("p");
        p1.innerText=el.des
        p1.setAttribute("id","p1")
        let p2 = document.createElement("p");
        p2.innerText=el.time
        p2.setAttribute("id","p2")
        let div4 = document.createElement("div")
        let div5= document.createElement("div")
        div5.append(p2,div4)
        div4.innerText="CC"
        div5.setAttribute("id","div5")
        div4.setAttribute("id","div4")
        let btn = document.createElement("button")
        btn.innerText="Watch Course"
        btn.setAttribute("id","btn")
        let box = document.createElement("div")
        let h6 = document.createElement("h6")
        h6.innerText="Editor's Notes"
        let box_p = document.createElement("p")
      
        box_p.innerText=el.de
        box.setAttribute("id","box")
        box.append(h6,box_p)
        
    
        
       div1.append(h3,div2,p1,div5,btn)
       div.append(img,div1)
       img.addEventListener("click",function(){
           window.location.href="display.html"
           let displayArr=[];
           displayArr.push(el)
       })

       btn.addEventListener("click",function(){
           window.location.href="joinnow.html"
       })
    //    document.getElementById("line").append(plus1)
        main.append(line,plus1,box,div)
      plus1.addEventListener("click",function(){
          box.style.display="block"
      })
    })
   
}
display(bootcampArr,main)