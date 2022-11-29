import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import account from "../components/account-page.js";

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

let account_page = document.querySelector(".account-container");
account_page.innerHTML = account();

let nav_list = document.querySelectorAll("#navigation>li");

const changeSettings = (i) => {
  let setting_boxes = document.querySelectorAll(".settings");
  nav_list.forEach((el) => {
    el.classList.remove("active");
  });
  setting_boxes.forEach((el) => {
    el.classList.remove("active");
  });
  nav_list[i].classList.add("active");
  setting_boxes[i].classList.add("active");
};

nav_list.forEach((el, index) => {
  el.addEventListener("click", () => {
    changeSettings(index);
  });
});

let sub_box = document.querySelectorAll(".sub-box");

const changePlan = (el) => {
  sub_box.forEach((item) => {
    item.classList.remove("active");
  });
  el.classList.add("active");
};

sub_box.forEach((item, index) => {
  item.addEventListener("click", () => {
    changePlan(item);
  });
});

const updateDetail = () => {
  let logged_user = JSON.parse(localStorage.getItem("logged_user"));
  let email = document.getElementById("email");
  let fn = document.getElementById("first_name");
  let ln = document.getElementById("last_name");
  email.value = logged_user.email;
  fn.value = logged_user.fn;
  ln.value = logged_user.ln;
};

updateDetail();

let update_user_form = document.getElementById("update_user");
let update_password = document.getElementById("update_password");
const update_user = () => {
  event.preventDefault();
  let login_data = JSON.parse(localStorage.getItem("login_data")) || [];
  let logged_user = JSON.parse(localStorage.getItem("logged_user")) || [];
  let email = document.querySelector("#email").value;
  let fn = document.querySelector("#first_name").value;
  let ln = document.querySelector("#last_name").value;
  logged_user.email = email;
  logged_user.fn = fn;
  logged_user.ln = ln;
  localStorage.setItem("logged_user", JSON.stringify(logged_user));
  for (let i = 0; i < login_data.length; i++) {
    let el = login_data[i];
    if (el.email == email) {
      el.email = email;
      el.fn = fn;
      el.ln = ln;
      localStorage.setItem("login_data", JSON.stringify(login_data));
      window.location.reload();
    }
  }
};

const updatePassword = () => {
  event.preventDefault();
  let login_data = JSON.parse(localStorage.getItem("login_data")) || [];
  let logged_user = JSON.parse(localStorage.getItem("logged_user")) || [];
  let new_password = document.querySelector("#new_password").value;
  let new_password_again = document.querySelector("#new_password_again").value;
  let alert_box = document.querySelector(".alert-msg");
  if (new_password != new_password_again) {
    alert_box.innerText = "Password Doen't match. Try again";
    alert_box.classList.add("active-alert");
    return;
  } else {
    logged_user.password = new_password;
    localStorage.setItem("logged_user", JSON.stringify(logged_user));
    for (let i = 0; i < login_data.length; i++) {
      let el = login_data[i];
      if (el.email == logged_user.email) {
        el.password = new_password;
        localStorage.setItem("login_data", JSON.stringify(login_data));
        window.location.reload();
      }
    }
  }
};

update_user_form.addEventListener("submit", update_user);
update_password.addEventListener("submit", updatePassword);
