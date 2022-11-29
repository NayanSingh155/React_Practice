import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

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

let user = document.getElementById("user");
let user_name = document.getElementById("user_name");

let logged_user = JSON.parse(localStorage.getItem("logged_user"));
// console.log(logged_user);
user.innerText = "Welcome Back, " + logged_user.fn + " " + logged_user.ln;
user_name.innerText = "Welcome Back, " + logged_user.fn + " " + logged_user.ln;

const updateProgress = (item) => {
  let counter = 0;
  let numb = item.querySelector(".numb>p");
  let id = setInterval(() => {
    if (counter == 100) {
      let right_div = item.querySelector(".bar.right");
      right_div.classList.add("reverse");
      let left_div = item.querySelector(".bar.left");
      left_div.classList.add("reverse-left");
      let innerId = setInterval(() => {
        if (counter == 0) {
          clearInterval(innerId);
        } else {
          counter -= 1;
          numb.textContent = counter + "%";
        }
      }, 20);
      clearInterval(id);
    } else {
      counter += 1;
      numb.textContent = counter + "%";
    }
  }, 20);
};

let con = document.querySelector(".circular");
updateProgress(con);