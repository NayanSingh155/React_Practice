var icon2arr =[
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-05-04-complete-react-v6/thumb.webp",
        name:"Complete Intro to React, v6",
        photo:"https://static.frontendmasters.com/assets/teachers/holt/thumb@2x.webp",
        title:"Brian Holt",
       com: "Stripe",
       des:"Much more than an intro, you’ll build with the latest features in React, including hooks, effects, context, and portals. Learn to build real-world apps from the ground up using the latest tools in the React ecosystem, like Parcel, ESLint, Prettier, and React Router!",
       time:"5 hours, 41 minute",
       head1:"Editor's Notes",
       de:"Learn to build an entire real-world, modern application from scratch in today’s tools!",
       src:"https://www.youtube.com/watch?v=Ke90Tje7VS0",
      d:"Learn to build real-world applications using modern React! Much more than an intro, you’ll start from the ground up, getting to using the latest features in React, including hooks, effects, context, and portals. Throughout the course, you’ll piece together tools from the entire React ecosystem (like Parcel, ESLint, Prettier, and React Router) to build a complete application to browse adoptable pets!"
 

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-05-04-intermediate-react-v3/thumb.webp",
        name:"Intermediate React, v3",
        photo:"https://static.frontendmasters.com/assets/teachers/holt/thumb@2x.webp",
        title:"Brian Holt",
        com: "Stripe",
        des:"Build scalable React applications while learning React hooks in-depth, CSS-in-JS with TailwindCSS, increase performance with code splitting and server-side rendering, add TypeScript, state management with Redux, test your app with Jest …and more!",
        time:"6 hours, 7 minutes ",
        head1:"Editor's Notes",
        de:"Learn the tools in the surrounding React ecosystem.",
        src:"https://www.youtube.com/watch?v=Ke90Tje7VS0",
        d:"Learn to build real-world applications using modern React! Much more than an intro, you’ll start from the ground up, getting to using the latest features in React, including hooks, effects, context, and portals. Throughout the course, you’ll piece together tools from the entire React ecosystem (like Parcel, ESLint, Prettier, and React Router) to build a complete application to browse adoptable pets!"
   
   
      },
    {
        img:"https://static.frontendmasters.com/assets/courses/2020-02-14-pure-react-state/thumb.webp",
        name:"State Management in Pure React, v2",
        photo:"https://static.frontendmasters.com/assets/teachers/kinney/thumb@2x.webp",
        title:"Steve Kinney",
       com: "Temporal",
       des:"Use React APIs to manage state in class-based components, and in React hooks. Create custom hooks, use reducers, add routing, and then learn ways to do more complicated state management techniques such as using the Context API.",
       time:"4 hours, 27 minutes",
       head1:"Editor's Notes",
       de:"Learn patterns for managing state throughout your React application.",
       src:"https://www.youtube.com/watch?v=Ke90Tje7VS0",
       d:"Learn to build real-world applications using modern React! Much more than an intro, you’ll start from the ground up, getting to using the latest features in React, including hooks, effects, context, and portals. Throughout the course, you’ll piece together tools from the entire React ecosystem (like Parcel, ESLint, Prettier, and React Router) to build a complete application to browse adoptable pets!"
  

    },
    {
        img:"https://static.frontendmasters.com/assets/courses/2021-05-25-react-typescript/thumb.webp",
        name:"React and TypeScript",
        photo:"https://static.frontendmasters.com/assets/teachers/kinney/thumb@2x.webp",
        title:"Steve Kinney",
       com: "Temporal",
       des:"Ship React apps with more code confidence using TypeScript! Migrate your app to TypeScript, type simple and advanced React components, and learn all types shipped with React for writing React with TypeScript.",
       time:"5 hours, 3 minutes",
       head1:"Editor's Notes",
      de:"Learn patterns for managing state throughout your React application.",
      src:"https://www.youtube.com/watch?v=Ke90Tje7VS0",
      d:"Learn to build real-world applications using modern React! Much more than an intro, you’ll start from the ground up, getting to using the latest features in React, including hooks, effects, context, and portals. Throughout the course, you’ll piece together tools from the entire React ecosystem (like Parcel, ESLint, Prettier, and React Router) to build a complete application to browse adoptable pets!"
 

    }
]

// background: #181818;
let main=document.getElementById("main")
import {display} from "../components/display.js"
// console.log(navbar)
display(icon2arr,main)

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
desc:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
icon: "",
img:"https://th.bing.com/th/id/R.21cef5f5ff8f0a831ed1692e91e7154a?rik=aLpwwKogBecykg&riu=http%3a%2f%2fyycjs.com%2freal-world-react%2fimg%2freact-logo.png&ehk=Da48R0vYoMh7ImQa8E9fc04Z5BaQHyOkz3qjQ6IddFo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
title: "Be Productive with React.js, Today's Most Popular Framework"

  }
]
let elective_bottom = document.querySelector(".elective-container ");

appedData(progress1, elective_bottom);

addEventToBox();
