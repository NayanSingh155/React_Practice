var icon5arr = [
    {
        img:"https://static.frontendmasters.com/assets/courses/2020-10-20-vue-3/thumb.webp",
        name:"Introduction to Vue 3",
        photo:"https://static.frontendmasters.com/assets/teachers/drasner/thumb@2x.webp",
        title:"Sarah Drasner",
       com: "Netlify",
       des:"Learn fundamental concepts in Vue, such as directives, methods, and computed watchers. You’ll learn Vue’s reactivity system and the new Composition API in Vue 3.",
       time:"4 hours, 57 minutes",
       de:"Get a dynamic and fun introduction to Vue from Sarah Drasner!",
       src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2020-10-27-vue-nuxt-apps/thumb.webp",
        name:"Building Applications with Vue & Nuxt",
        photo:"https://static.frontendmasters.com/assets/teachers/drasner/thumb@2x.webp",
        title:"Sarah Drasner",
       com: "Netlify",
       des:"Learn fundamental concepts in Vue, such as directives, methods, and computed watchers. You’ll learn Vue’s reactivity system and the new Composition API in Vue 3.",
       time:"3 hours, 37 minutes",
       de:"Learn how to build a variety of applications in the real world.",
       src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   
    
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-02-18-production-vue/thumb.webp",
        name:"Production-Grade Vue.js",
        photo:"https://static.frontendmasters.com/assets/teachers/hong/thumb@2x.webp",
        title:"Ben Hong",
        com:"Netlify",
        des:"Learn component design patterns, workflows to enhance productivity, testing methodologies, state management, routing, best practices for architecting increasingly complex applications, and more.",
        time:"4 hours, 37 minutes",
        de:"Learn best practices in order to build Vue.js apps that can scale and grow!",
        src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   
    }
]

// background: #181818;
let main=document.getElementById("main")
import {display} from "../components/display.js"
// console.log(navbar)
display(icon5arr,main)

import {  appedData, addEventToBox } from "../components/path.js";
import navbar  from "../components/navbar.js";
import footer from "../components/footer.js";

// Header & Footer
let header = document.querySelector(".header");
let footer_container = document.querySelector("#footer");
header.innerHTML = navbar();
footer_container.innerHTML = footer();
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
var progress1 =[
  {
   img:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
   title:"Learn Vue.js, An Easy to Pick Up and Powerful Framework ",
   desc:"Vue is easy to pick up and integrate with other libraries or existing projects, but can scale up to power sophisticated web applications."
  }
]
let elective_bottom = document.querySelector(".elective-container ");

appedData(progress1, elective_bottom);

addEventToBox();
