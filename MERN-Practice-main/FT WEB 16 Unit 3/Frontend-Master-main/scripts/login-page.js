import login from "../components/login.js";
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
const logout = () => {
  window.location.href = "index.html";
  localStorage.removeItem("logged_user");
};

// For logout
let logout_btn = document.getElementById("logout");
if (logout_btn) {
  logout_btn.addEventListener("click", logout);
}

let login_container = document.querySelector(".login-container");
login_container.innerHTML = login();

let login_form = document.querySelector("#login-form");

const loginUser = (event) => {
  event.preventDefault();
  let login_data = JSON.parse(localStorage.getItem("login_data")) || [];

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  //   if
  let success = false;
  let logged_user = null;
  for (let i = 0; i < login_data.length; i++) {
    let el = login_data[i];
    if (el.email === email && el.password == password) {
      success = true;
      logged_user = el;
      break;
    }
  }
  let alert_box = document.querySelector(".alert-msg");
  if (success) {
    localStorage.setItem("logged_user", JSON.stringify(logged_user));
    window.location.href = "dashboard.html";
  } else {
    alert_box.innerText = "That wasn't correct. Try again?";
    alert_box.classList.add("active-alert");
  }
};

login_form.addEventListener("submit", loginUser);
