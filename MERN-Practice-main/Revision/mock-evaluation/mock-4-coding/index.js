let page_number = 1;
let number_of_pages = 5;
function display(data) {
  document.querySelector(".container").innerHTML = null;
  data.map((e, i) => {
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src =
      "https://th.bing.com/th/id/OIP.zs9g3emlEhLN16b1z5_CzwHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    let name = document.createElement("h3");
    name.innerText = e.author;
    let title = document.createElement("h4");
    title.innerText = e.title;
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let comm = document.createElement("img");
    comm.src =
      "https://th.bing.com/th/id/OIP.kf3b6tVrP-mko-HkVf4gEAAAAA?pid=ImgDet&rs=1";
    let num = document.createElement("h6");
    num.innerText = e.num_comments;
    let a = document.createElement("a");
    a.innerText = "Go to article";
    a.href = e.url;
    div3.append(comm, num);
    div1.append(img, name);
    div2.append(div3, a);
    div.append(div1, title, div2);
    document.querySelector(".container").append(div);
  });
}
const getMaxComm = async () => {
  try {
    const res = await fetch(
      `https://jsonmock.hackerrank.com/api/articles?page=${page_number}&per_page=10`
    );
    let data = await res.json();
    // console.log(data);
    data = data.data;
    data.sort((a, b) => b.num_comments - a.num_comments);

    display(data);
  } catch (e) {
    console.log(e);
  }
};
document.querySelector(".btn1").addEventListener("click", getMaxComm);
const getLatComm = async () => {
  try {
    const res = await fetch(
      `https://jsonmock.hackerrank.com/api/articles?page=${page_number}&per_page=10`
    );
    let data = await res.json();
    // console.log(data);
    data = data.data;
    data.sort((a, b) => b.created_at - a.created_at);

    display(data);
  } catch (e) {
    console.log(e);
  }
};
document.querySelector(".btn2").addEventListener("click", getLatComm);
