import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import single_course from "../components/single-course.js";

document.querySelector(".header").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

// Click Event on Hamburger Icon
const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

const logout = () => {
  window.location.href = "index.html";
  localStorage.removeItem("logged_user");
};
// For logout
let logout_btn = document.getElementById("logout");
if (logout_btn) {
  logout_btn.addEventListener("click", logout);
}

let course_container = document.querySelector(".course-wrap");

course_container.innerHTML = single_course();
