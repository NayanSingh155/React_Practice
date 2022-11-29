import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import joinnow from "../components/joinnow.js";

document.querySelector(".header").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();

// Click Event on Hamburger Icon
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
let join_now_container = document.querySelector(".join-now-container");
join_now_container.innerHTML = joinnow();
let sub_box = document.querySelectorAll(".sub-box");
const changePlan = (el, msg) => {
  sub_box.forEach((item) => {
    item.classList.remove("active");
  });
  el.classList.add("active");
  let title = document.querySelector(".plan");
  title.innerText = msg;
};
let data = [
  "Register for a Monthly Account",
  "Register for a Yearly Account",
  "Register for a Monthly Team Account",
  "Register for a Yearly Team Account",
];

sub_box.forEach((item, index) => {
  item.addEventListener("click", () => {
    let msg = data[index];
    changePlan(item, msg);
  });
});

let form = document.querySelector("#register");

const storeData = () => {
  event.preventDefault();
  let login_data = JSON.parse(localStorage.getItem("login_data")) || [];
  let email = document.getElementById("email").value;
  let fn = document.getElementById("first_name").value;
  let ln = document.getElementById("last_name").value;
  let password = document.getElementById("password").value;
  let payment_type = document.getElementById("payment_option").value;
  let card_number = document.getElementById("card_number").value;
  let expiry = document.getElementById("expiry").value;
  let cvc = document.getElementById("cvc").value;

  let detail = {
    email,
    fn,
    ln,
    password,
    payment_type,
    card_number,
    expiry,
    cvc,
  };
  login_data.push(detail);
  localStorage.setItem("login_data", JSON.stringify(login_data));
  document.getElementById("email").value = "";
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("password").value = "";
  document.getElementById("password_again").value = "";
  document.getElementById("card_number").value = "";
  document.getElementById("expiry").value = "";
  document.getElementById("cvc").value = "";
  window.location.href = "Login.html";
};
form.addEventListener("submit", storeData);
