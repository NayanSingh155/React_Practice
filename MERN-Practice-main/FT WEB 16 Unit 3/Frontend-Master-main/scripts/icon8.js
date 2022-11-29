var icon8arr = [
    {
        img:"https://static.frontendmasters.com/assets/courses/2020-09-25-d3/thumb.webp",
        name:"Introduction to D3.js",
        photo:"https://static.frontendmasters.com/assets/teachers/wu/thumb@2x.webp",
        title:"Shirley Wu",
        com:"Data Sketches",
        des:"Build cu charts with D3.js using data binding with the enter-update-exit pattern. You'll learn scales and to animate between different D3 layouts for building truly interactive charts.",
        time:"5 hours, 59 minutes",
        de:"This custom data visualization course walks you through the entire process, from start to design to developing a visualization from scratch.",
        src:"https://www.youtube.com/embed/6vbgZnQrpbU",
        d:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course! This course and others like it are available as part of our Frontend Masters video subscription."
   
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2018-09-11-d3-js-custom-charts/thumb.webp",
        name:"Building Custom Data Visualizations",
         photo:"https://static.frontendmasters.com/assets/teachers/wu/thumb@2x.webp",
        title:"Shirley Wu",
        com:"Data Sketches",
        des:"Learn the visualization principles and process for building custom advanced data visualizations with D3.js and SVG with S,hirley Wu.",
        time:"4 hours, 24 minutes ",
        de:"This custom data visualization course walks you through the entire process, from start to design to developing a visualization from scratch.",
        src:"https://www.youtube.com/embed/6vbgZnQrpbU",
        d:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course! This course and others like it are available as part of our Frontend Masters video subscription."
   
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-01-14-svg-essentials-animation/thumb.webp",
        name:"SVG Essentials & Animation, v2",
        photo:"https://static.frontendmasters.com/assets/teachers/drasner/thumb@2x.webp",
        title:"Sarah Drasner",
       com: "Netlify",
       des:"Build and optimize SVG – the scalable graphics format for the web that can achieve impressively small filesizes for fast-loading websites!",
       time:"4 hours, 12 minutes CC",
       de:"This custom data visualization course walks you through the entire process, from start to design to developing a visualization from scratch.",
       src:"https://www.youtube.com/embed/6vbgZnQrpbU",
       d:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course! This course and others like it are available as part of our Frontend Masters video subscription."
  
    }
]

// background: #181818;
let main=document.getElementById("main")
import {display} from "../components/display.js"
// console.log(navbar)
display(icon8arr,main)

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
        img:"https://assets.website-files.com/57e53b27f0345c214ef43b64/5a245c9eb1a83e0001a5a066_D3-logo.png",
        title:"Turn Data into Visualizations with D3.js",
        desc:'everage your web development skills to make your web pages interact and visualize data with D3.js!'
    }
]
let elective_bottom = document.querySelector(".elective-container ");

appedData(progress1, elective_bottom);

addEventToBox();
