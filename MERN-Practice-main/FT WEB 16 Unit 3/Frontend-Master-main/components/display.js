function display(data, main) {
  data.map(function (el) {
    let plus1 = document.createElement("div");
    plus1.setAttribute("class", "plus1");
    plus1.innerText = "+";
    let line = document.createElement("div");
    line.setAttribute("id", "line");
    let div = document.createElement("div");
    div.setAttribute("id", "div");
    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    let img = document.createElement("img");
    img.src = el.img;
    img.setAttribute("id", "img");
    let img1 = document.createElement("img");
    img1.src = el.photo;
    img1.setAttribute("id", "img1");
    let h3 = document.createElement("h3");
    h3.innerText = el.name;
    let h4 = document.createElement("h4");
    h4.innerText = el.title;
    let p = document.createElement("p");
    p.innerText = el.com;
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    div3.append(h4, p);
    div2.append(img1, div3);
    div3.setAttribute("id", "div3");
    div2.setAttribute("id", "div2");
    div2.style.display = "flex";
    p.setAttribute("id", "p");
    let p1 = document.createElement("p");
    p1.innerText = el.des;
    p1.setAttribute("id", "p1");
    let p2 = document.createElement("p");
    p2.innerText = el.time;
    p2.setAttribute("id", "p2");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    div5.append(p2, div4);
    div4.innerText = "CC";
    div5.setAttribute("id", "div5");
    div4.setAttribute("id", "div4");
    let btn = document.createElement("button");
    btn.innerText = "Watch Free Preview";
    let btn1 = document.createElement("button");
    btn1.innerText = "Get Full Access";
    btn.setAttribute("id", "btn");
    btn1.setAttribute("id", "btn1");
    let div6 = document.createElement("div");
    let box = document.createElement("div");
    let h6 = document.createElement("h6");
    h6.innerText = "Editor's Notes";
    let box_p = document.createElement("p");

    box_p.innerText = el.de;
    box.setAttribute("id", "box");
    box.append(h6, box_p);
    div6.append(btn, btn1);
    div6.style.display = "flex";
    div6.setAttribute("id", "div6");
    div1.append(h3, div2, p1, div5, div6);
    div.append(img, div1);
    div.addEventListener("click", function () {
      window.location.href = "displaydata.html";
      let displayArr = [];
      displayArr.push(el);
      localStorage.setItem("displaydata",JSON.stringify(displayArr))
    });

    btn1.addEventListener("click", function () {
      window.location.href = "joinnow.html";
    });
    //    document.getElementById("line").append(plus1)
    main.append(line, plus1, box, div);
    plus1.addEventListener("click", function () {
      box.style.display = "block";
      line.style.height="560px"
    });
  });
}

export { display };
