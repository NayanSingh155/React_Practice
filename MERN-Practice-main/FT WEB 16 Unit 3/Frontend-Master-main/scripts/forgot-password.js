import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import forgot from "../components/forgot-password.js";

document.querySelector(".header").innerHTML = navbar();
const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".mobile");
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
document.querySelector("#footer").innerHTML = footer();
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

let forgot_password_container = document.querySelector(
  ".forgot-password-container"
);
forgot_password_container.innerHTML = forgot();

let forgot_password_form = document.querySelector("#forgot-pass");
const resetPassword = () => {
  event.preventDefault();
  let login_data = JSON.parse(localStorage.getItem("login_data")) || [];
  let email = document.querySelector("#email").value;
  let new_pass = document.querySelector("#new-pass").value;
  let success = false;
  for (let i = 0; i < login_data.length; i++) {
    let el = login_data[i];
    if (el.email === email) {
      el.password = new_pass;
      success = true;
      break;
    }
  }
  let alert_box = document.querySelector(".alert-msg");
  if (success) {
    localStorage.setItem("login_data", JSON.stringify(login_data));
    window.location.href = "Login.html";
  } else {
    alert_box.innerText = "Email doesn't Exist in our database. Try again";
    alert_box.classList.add("active-alert");
  }
};

forgot_password_form.addEventListener("submit", resetPassword);
