var icon6arr =[
    {
        img:"https://static.frontendmasters.com/assets/courses/2022-02-01-angular-13/thumb.webp",
        name:"Angular 13 Fundamentals",
        photo:"https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb@2x.webp",
        title:"Lukas Ruebbelke",
        com:"Venmo",
        des:"Learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll move on to Angular core concepts like components, templates, routing, forms, server-side communicati,on, and more.",
        time:"6 hours, 52 minutes",
        de:"Angular incorporates many of the industry’s best ideas and tooling into one powerful framework!",
        src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-08-03-typescript-v3/thumb.webp",
        name:"TypeScript Fundamentals, v3",
        photo:"https://static.frontendmasters.com/assets/teachers/north/thumb@2x.webp",
        title:"Mike North",
       com: "LinkedIn",
       des:"TypeScript adds a powerful type system on top of your JavaScript to catch bugs before they happen and provide a superior developer experience for collaborative team",
       time:"4 hours, 27 minutes",
       de:"Angular incorporates many of the industry’s best ideas and tooling into one powerful framework!",
       src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-01-19-production-angular/thumb.webp",
        name:"Production-Grade Angular",
        photo:"https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb@2x.webp",
        title:"Lukas Ruebbelke",
        com:"Venmo",
        des:"Learn how to structure your projects leveraging Angular CLI and Nx. Create shared modules and apply unit tests and end-to-end testing. Analyze performance and ship your app to production using Docker.",
        time:"6 hours, 57 minutes",
        de:"Angular incorporates many of the industry’s best ideas and tooling into one powerful framework!",
        src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   

    }
]

// background: #181818;
let main=document.getElementById("main")
import {display} from "../components/display.js"
// console.log(navbar)
display(icon6arr,main)

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
    img:"https://raw.githubusercontent.com/CAST-Extend/resources/master/com.castsoftware.angularjs.png",
    title:"Learn Angular, a TypeScript-based web application framework led by Google",
    desc:"Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations."

  }
]
let elective_bottom = document.querySelector(".elective-container ");

appedData(progress1, elective_bottom);

addEventToBox();
