var icon4arr =[
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-07-20-node-js-v2/thumb.webp",
        name:"Introduction to Node.js, v2",
        photo:"https://static.frontendmasters.com/assets/teachers/moss/thumb@2x.webp",
        title:"Scott Moss",
        Com:"Netflix",
        des:"Transfer your JavaScript skills to the server-side and level up to a full-stack engineer! By learning the foundations of Node.js, you’ll be able to do a lot more with JavaScript, like creating command-line interfaces and APIs, and interacting with the file system.",
        time:"4 hours, 51 minutes",
        head1:"Editor's Notes",
        de:"Go under the hood of Node.js and gain a mental model of how writing JavaScript on the server with Node.js works.",
        src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-05-24-servers-node-js/thumb.webp",
        name:"The Hard Parts of Servers & Node.js",
        photo:"https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.webp",
        title:"Will Sentance",
        com:"Codesmith",
        des:"Uncover the most challenging, yet most powerful features in Node.js, to help you write and debug professional server code.",
        time:"5 hours, 16 minutes",
        head1:"Editor's Notes",
        de:"Get the deep fundamental concepts of Node.js with Kyle Simpson, author of the ‘You Don’t Know JS’ Bo",
        src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-11-25-server-graphql-nodejs/thumb.webp",

        name:"Digging Into Node.js",
        photo:"https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.webp",
        title:"Kyle Simpson",
        com:"You Don't Know JS",
        des:"Learn the fundamental concepts of programming in Node.js: CLI programming, file system access, asynchrony, streams, HTTP servers & routing, database persistence, and child processes.",
        time:"4 hours, 0 minute",
        head1:"Editor's Notes",
        de:"Building APIs is the foundation of any back-end application.",
        src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-01-18-api-design-nodejs-v3/thumb.webp",
        name:"API Design in Node.js, v3",
        photo:"https://static.frontendmasters.com/assets/teachers/moss/thumb@2x.webp",
        title:"Scott Moss",
        Com:"Netflix",
        des:"Use Express to build a REST API in Node.js – handle REST API verb methods to create, read, update and delete resources from a MongoDB database.",
        time:"3 hours, 34 minutes",
        head1:"Editor's Notes",
        de:"GraphQL is the new standard for building flexible APIs.",
        src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   

        
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-11-25-server-graphql-nodejs/thumb.webp",
        name:"Server-Side GraphQL in Node.js",
        photo:"https://static.frontendmasters.com/assets/teachers/moss/thumb@2x.webp",
        title:"Scott Moss",
        Com:"Netflix",
        des:"Transfer your JavaScript skills to the server-side and level up to a full-stack engineer! By learning the foundations of Node.js, you’ll be able to do a lot more with JavaScript, like creating command-line interfaces and APIs, and interacting with the file system.",
        time:"4 hours, 51 minutes",
        head1:"Editor's Notes",
        de:"Jem teaches you the essentials for setting up and launching servers in a two-part series.",
        src:"https://www.youtube.com/embed/_y9oxzTGERs",
    d:"A deep dive into JavaScript and functional programming techniques, this course is for beginner to intermediate JavaScript developers who want to learn techniques to write professional, modern JavaScript. In this course, Bianca cuts through the technical jargon to reveal the core concepts of JavaScript and applying functional programming techniques to JavaScript. Learn higher-order functions, closures, scope and the fundamentals necessary to use modern frameworks like React, Angular and Vue. You'll master key functional methods like map, reduce and filter ...plus promises and ES6+ asynchronous JavaScript!"
   
    
    }
]

// background: #181818;
let main=document.getElementById("main")
import {display} from "../components/display.js"
// console.log(navbar)
display(icon4arr,main)

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
    class: "js",
color: "#c94f17",
desc:"Node.js has emerged as one of the main server-side language choices that powers the web!",
icon: "",
img:"https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png",
title: "Build Web APIs and Applications with Node.js"

  }
]
let elective_bottom = document.querySelector(".elective-container ");

appedData(progress1, elective_bottom);

addEventToBox();
