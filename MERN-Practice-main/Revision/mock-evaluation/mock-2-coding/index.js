var data = [];
function createData() {
  for (let i = 1; i < 10000; i++) {
    let item = {
      title: `Masai Student ${i}`,
    };

    data.push(item);
  }
}
createData();
// console.log(data)
let container = document.getElementById("container");
let modal = document.getElementById("modal");
let close1 = document.getElementById("close1");
close1.addEventListener("click", function () {
  modal.style.display = "none";
});
let close = document.getElementById("close");
close.addEventListener("click", function () {
  modal.style.display = "none";
});
let limit = 25;
let pageCount = 0;

const get = () => {
  let arr = [];

  for (let i = 0; i < limit; i++) {
    arr.push(data[pageCount++]);
  }
  arr.map((e) => {
    let h1 = document.createElement("h1");
    h1.innerText = e.title;
    container.append(h1);
    h1.addEventListener("click", function () {
      let h = document.getElementById("modal-h1");
      h.innerText = e.title;
      modal.style.display = "block";
    });
  });
};
get();
function showData() {
  setTimeout(() => {
    get();
  }, 1000);
}
window.addEventListener("scroll", function () {
  let { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  // console.log("scrolling")
  if (scrollTop + clientHeight >= scrollHeight) {
    // console.log("I Am here")
    showData();
  }
});
