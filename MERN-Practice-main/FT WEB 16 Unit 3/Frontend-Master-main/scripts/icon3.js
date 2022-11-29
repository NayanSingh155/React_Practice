var icon3arr =[
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-08-03-typescript-v3/thumb.webp",
        name:"TypeScript Fundamentals, v3",
        photo:"https://static.frontendmasters.com/assets/teachers/north/thumb@2x.webp",
        title:"Mike North",
        com:"LinkedIn",
        des:"TypeScript adds a powerful type system on top of your JavaScript to catch bugs before they happen and provide a superior developer experience for collaborative teams.",
        time:"4 hours, 27 minutes",
        head1:"Editor's Notes",
        de:"Use TypeScript to add strong typing to large JavaScript apps helps reduce bugs and keeps code performant and maintainable.",
        src:"https://www.youtube.com/watch?v=gp5H0Vw39yw",
        d:"Use TypeScript to add strong typing to large JavaScript apps helps reduce bugs and keeps code performant and maintainable. Learn key Typescript features such as typing variables and function signatures, abstract classes, interfaces, enums, and more – these features increase your ability to fix errors fast. Learn how to migrate your codebase to TypeScript the smart way and improve productivity while building large-scale TypeScript applications with ease!"

      },
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-08-04-intermediate-typescript/thumb.webp",
        name:"Intermediate TypeScript",
        photo:"https://static.frontendmasters.com/assets/teachers/north/thumb@2x.webp",
        title:"Mike North",
        com:"LinkedIn",
        des:"TypeScript adds a powerful type system on top of your JavaScript to catch bugs before they happen and provide a superior developer experience for collaborative teams.",
        time:"2 hours, 48 minutes",
        de:"Grow from being a contributor to a TypeScript codebase to being on the path to becoming “the TypeScript expert” for your team",
        head1:"Editor's Notes",
        src:"https://youtu.be/82XE1X0Xblo",
        d:"Use TypeScript to add strong typing to large JavaScript apps helps reduce bugs and keeps code performant and maintainable. Learn key Typescript features such as typing variables and function signatures, abstract classes, interfaces, enums, and more – these features increase your ability to fix errors fast. Learn how to migrate your codebase to TypeScript the smart way and improve productivity while building large-scale TypeScript applications with ease!"


    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2020-11-11-production-typescript/thumb.webp",
        name:"Production-Grade TypeScript",
        photo:"https://static.frontendmasters.com/assets/teachers/north/thumb@2x.webp",
        title:"Mike North",
        com:"LinkedIn",
        des:"Use the TypeScript language at scale to increase the developer experience and productivity of your teams! You’ll learn to manage even the most ambitious TypeScript projects with confidence and ease.",
        time:"5 hours, 10 minute",
        head1:"Editor's Notes",
        de:"Grow from being a contributor to a TypeScript codebase to being on the path to becoming “the TypeScript expert” for your team.",
        src:"https://youtu.be/82XE1X0Xblo",
        d:"Use TypeScript to add strong typing to large JavaScript apps helps reduce bugs and keeps code performant and maintainable. Learn key Typescript features such as typing variables and function signatures, abstract classes, interfaces, enums, and more – these features increase your ability to fix errors fast. Learn how to migrate your codebase to TypeScript the smart way and improve productivity while building large-scale TypeScript applications with ease!"


    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-05-25-react-typescript/thumb.webp",
        name:" React and TypeScript",
        // name:"State Management in Pure React, v2",
        photo:"https://static.frontendmasters.com/assets/teachers/kinney/thumb@2x.webp",
        title:"Steve Kinney",
        com: "Temporal",
        des:"Use React APIs to manage state in class-based components, and in React hooks. Create custom hooks, use reducers, add routing, and then learn ways to do more complicated state management techniques such as using the Context API.",
        time:"4 hours, 27 minutes",
        head1:"Editor's Notes",
       de:"Learn to manage even the most ambitious TypeScript projects with confidence and ease.",
        src:"https://youtu.be/82XE1X0Xblo",
       d:"Use TypeScript to add strong typing to large JavaScript apps helps reduce bugs and keeps code performant and maintainable. Learn key Typescript features such as typing variables and function signatures, abstract classes, interfaces, enums, and more – these features increase your ability to fix errors fast. Learn how to migrate your codebase to TypeScript the smart way and improve productivity while building large-scale TypeScript applications with ease!"

     }
]
let main=document.getElementById("main")
import {display} from "../components/display.js"
// console.log(navbar)
display(icon3arr,main)

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

  // document.querySelector("#footer").innerHTML = footer();
const hamburger1  = document.querySelector(" #footer .menu");
const navMenu1 = document.querySelector("#footer .mobile");
hamburger1.addEventListener("click", function () {
  navMenu1.classList.toggle("active");
});
var progress1 =[
  {
    class: "js",
color: "#c94f17",
title:"Add Types to Your Web and Node.js Apps with TypeScript",
icon: "",
img:"https://th.bing.com/th/id/OIP.ts3lYA8TB3a6qWmDknphoQHaHa?pid=ImgDet&w=300&h=300&rs=1",
desc:"Write robust JavaScript with a superior developer experience for your teams with Typescript."
  }
]
let elective_bottom = document.querySelector(".elective-container ");

appedData(progress1, elective_bottom);

addEventToBox();
