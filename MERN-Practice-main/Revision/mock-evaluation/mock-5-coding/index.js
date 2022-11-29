let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pop = document.getElementById("pop").value;
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  let payload = { pop, city, country };
  // console.log(payload)
  post(payload);
});
const post = async (payload) => {
  try {
    let res = await fetch(`https://muskanmock5.herokuapp.com/data`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    let data = await res.json();
    // console.log(data)
    get();
  } catch (e) {
    console.log(e);
  }
};
const get = async () => {
  try {
    let res = await fetch(`https://muskanmock5.herokuapp.com/data`);
    let data = await res.json();
    // console.log(data)
    display(data);
  } catch (e) {
    console.log(e);
  }
};
const deleteData = (id) => {
  fetch(`https://muskanmock5.herokuapp.com/data/${id}`, {
    method: "DELETE",
  });
  get();
};
const patch = async (id, pop) => {
  try {
    let res = await fetch(`https://muskanmock5.herokuapp.com/data/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        pop: pop,
      }),
    });
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
get();
const display = (data) => {
  if (data.length > 0) {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = null;
    data.map((e, i) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = e.id;
      let td2 = document.createElement("td");
      td2.innerText = e.country;
      let td3 = document.createElement("td");
      td3.innerText = e.city;
      let td4 = document.createElement("td");
      td4.innerText = e.pop;
      let td5 = document.createElement("td");
      td5.innerText = "Edit";
      td5.addEventListener("click", () => {
        document.getElementById("modal").style.display = "block";
        document
          .getElementById("form1")
          .addEventListener("submit", function () {
            let pop1 = document.getElementById("pop1").value;
            // console.log(pop1)
            patch(e.id, pop1);
          });
      });
      let td6 = document.createElement("td");
      td6.innerText = "Delete";
      td6.addEventListener("click", () => deleteData(e.id));
      tr.append(td1, td2, td3, td4, td5, td6);
      tbody.append(tr);
    });
  } else {
    document.getElementById("table").style.display = "none";
    document.getElementById("sort").style.display = "none";
    document.getElementById("filter").style.display = "none";

    let p = document.createElement("h4");
    p.innerText = "No Data to Show";
    document.getElementById("nd").append(p);
  }
};
document.getElementById("sort").addEventListener("change", async () => {
  let sort = document.getElementById("sort").value;
  if (sort == "asp") {
    try {
      let res = await fetch(`https://muskanmock5.herokuapp.com/data`);
      let data = await res.json();
      // console.log(data)
      data.sort((a, b) => a.pop - b.pop);
      display(data);
    } catch (e) {
      console.log(e);
    }
  }
  if (sort == "dsp") {
    try {
      let res = await fetch(`https://muskanmock5.herokuapp.com/data`);
      let data = await res.json();
      // console.log(data)
      data.sort((a, b) => b.pop - a.pop);
      display(data);
    } catch (e) {
      console.log(e);
    }
  }
});
document.getElementById("filter").addEventListener("change", async () => {
  let filt = document.getElementById("filter").value;
  try {
    let res = await fetch(`https://muskanmock5.herokuapp.com/data`);
    let data = await res.json();
    let fData = data.filter((e) => e.country === filt);
    display(fData);
  } catch (e) {
    console.log(e);
  }
});
let close = document.getElementById("close");
close.addEventListener("click", function () {
  modal.style.display = "none";
});
