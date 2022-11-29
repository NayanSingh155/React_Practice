var icon7arr = [
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-12-14-getting-started-css/thumb.webp",
        name:"Getting Started with CSS",
        photo:"https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",
        title:"Jen Kramer",
        com:"Freelance Instructor",
        des:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course!",
        time:"3 hours, 19 minutes",
        de:"Use CSS to layout and visually style web pages so you’re websites aren’t just functional, but they look nice as well!",
        src:"https://www.youtube.com/embed/6vbgZnQrpbU",
        d:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course! This course and others like it are available as part of our Frontend Masters video subscription."
   
      },
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-10-26-css-grid-flexbox-v2/thumb.webp",
        name:"CSS Grid & Flexbox for Responsive Layouts, v2",
        photo:"https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",
        title:"Jen Kramer",
        com:"Freelance Instructor",
        des:"Learn the essential CSS layout techniques for building responsive, beautiful websites. You'll use CSS Grid and Flexbox along with responsive images to build out real-world web layouts!",
        time:"5 hours, 49 minutes",
        de:"The most essential tools to bring your designs to life are modern CSS layout tools such as Flexbox and CSS Grid.",
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
       time:"4 hours, 12 minutes",
       de:"Use CSS to layout and visually style web pages so you’re websites aren’t just functional, but they look nice as well!",
       src:"https://www.youtube.com/embed/6vbgZnQrpbU",
       d:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course! This course and others like it are available as part of our Frontend Masters video subscription."
  

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2019-09-12-advanced-css-layouts/thumb.webp",
        name:"Advanced CSS Layouts",
        photo:"https://static.frontendmasters.com/assets/teachers/kramer/thumb@2x.webp",
        title:"Jen Kramer",
        com:"Freelance Instructor",
        des:"Flexbox and Grid provide methods for creating responsive websites with designs not previously possible. Combined with CSS Calc & Custom Properties, they revolutionize the way we lay out web pages with CSS!",
        time:"3 hours, 46 minutes",
        de:"The most essential tools to bring your designs to life are modern CSS layout tools such as Flexbox and CSS Grid.",
        src:"https://www.youtube.com/embed/6vbgZnQrpbU",
        d:"Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course! This course and others like it are available as part of our Frontend Masters video subscription."
   
    }
]

// background: #181818;
let main=document.getElementById("main")
import {display} from "../components/display.js"
// console.log(navbar)
display(icon7arr,main)

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
      img:"https://th.bing.com/th/id/R.6b2018f5c6532f6c29806ef06ffb158d?rik=A1DOk4SIw4rtiw&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2021%2f02%2fCSS-Logo.png&ehk=ON8ObCxBDE%2f%2fZS37%2fZkw9lFVSiR1xOwAcDkS%2bdFm6vc%3d&risl=&pid=ImgRaw&r=0",
      title:"Learn CSS, from Laying Out Websites to Performant Animations",
      desc:"CSS is rich in capabilities and is more than simply laying out pages! Replace costly JavaScript with CSS."
  }
]
let elective_bottom = document.querySelector(".elective-container ");

appedData(progress1, elective_bottom);

addEventToBox();
