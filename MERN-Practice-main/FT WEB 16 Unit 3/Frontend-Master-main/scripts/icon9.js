var icon9arr =[
    {
        img:"https://static.frontendmasters.com/assets/courses/2018-06-29-webpack-fundamentals/thumb.webp",
        name:"Webpack 4 Fundamentals",
        photo:"https://static.frontendmasters.com/assets/teachers/larkin/thumb@2x.webp",
        title:"Sean Larkin",
        com:"Microsoft",
        des:"Learn the core concepts of Webpack 4. Start from scratch by adding Webpack with npm and build up a pipeline with popular loaders from the Webpack ecosystem!",
        time:"4 hours, 10 minute",
        de:"This course walks you through everything you need to know to create custom build processes.",
        src:"https://www.youtube.com/embed/6vbgZnQrpbU",
        d:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course! This course and others like it are available as part of our Frontend Masters video subscription."
   
    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2018-07-01-performance-webpack/thumb.webp",
        name:"Web Performance with Webpack",
        photo:"https://static.frontendmasters.com/assets/teachers/larkin/thumb@2x.webp",
        title:"Sean Larkin",
        com:"Microsoft",
        des:"Make websites load instantly using Webpack for lazy loading JavaScript with code splitting, removing unused code with tree shaking and prefetching assets",
        time:" hours, 43 minutes ",
        de:"This course walks you through everything you need to know to create custom build processes.",
        src:"https://www.youtube.com/embed/6vbgZnQrpbU",
        d:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course! This course and others like it are available as part of our Frontend Masters video subscription."
   

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2018-07-02-webpack-plugins/thumb.webp",
        name:"Webpack Plugins System",
        photo:"https://static.frontendmasters.com/assets/teachers/larkin/thumb@2x.webp",
        title:"Sean Larkin",
        com:"Microsoft",
        des:"earn the Webpack 4 plugin system, tour the Webpack source code and learn to build custom plugins and custom Webpack loaders.",
        time:"1 hours, 34 minutes",
        de:"This course walks you through everything you need to know to create custom build processes.",
        src:"https://www.youtube.com/embed/6vbgZnQrpbU",
        d:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course! This course and others like it are available as part of our Frontend Masters video subscription."
   
    }
]

// background: #181818;
let main=document.getElementById("main")
import {display} from "../components/display.js"
// console.log(navbar)
display(icon9arr,main)

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
     img:"https://th.bing.com/th/id/OIP.xQCjgB2DVqhtqGoGw9E6TQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.41&pid=1.7",
     title:"Learn Webpack, the most popular and flexible build tool for JavaScript",
     desc:"Webpack enables you to integrate your favorite tools and take control of how you deliver your JavaScript, CSS, and more!​"
 }
]
let elective_bottom = document.querySelector(".elective-container ");

appedData(progress1, elective_bottom);

addEventToBox();
