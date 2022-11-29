import { pathContainer, appedData, addEventToBox } from "../components/path.js";
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
// Click Event on Hamburger Icon
// hamburgerClick();

// Path-Container Top Component
let map_svg = localStorage.getItem("map_svg");
let topic_icon = localStorage.getItem("topic_icon");
let path_conatiner = document.querySelector(".path-container");
let elective_conatiner = document.querySelector(".elective-container");
path_conatiner.innerHTML = pathContainer(
  map_svg,
  "Learning Paths",
  "Guided paths to expand your abilities as a well-rounded engineer!"
);
elective_conatiner.innerHTML = pathContainer(
  topic_icon,
  "Topic Paths:",
  "Focus on a specific area in web development."
);

// Path-Container bottom Component
let learn_data = JSON.parse(localStorage.getItem("learn_data"));
let path_bottom = document.querySelector(".path-container > .p-bottom");
let elective_bottom = document.querySelector(".elective-container > .p-bottom");
let elective_data = JSON.parse(localStorage.getItem("elective_data"));

appedData(learn_data, path_bottom);
appedData(elective_data, elective_bottom);

// Add Event on every p_box
addEventToBox();
