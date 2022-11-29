let timer;

let list = document.getElementById("list");
async function get() {
  try {
    let search = document.getElementById("movie").value;
    console.log(search);

    let res = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=fb68bfc5`
    );
    let data = await res.json();
    return data.Search;
  } catch (err) {
    console.log(err);
  }
}
function append(data) {
  let search = document.getElementById("movie").value;
  list.innerHTML = null;
  data.map(function (el) {
    let p = document.createElement("p");
    p.innerText = el.Title;

    p.addEventListener("click", function () {
      window.location.href = "index1.html";
      localStorage.setItem("title", p.innerText);
    });

    // console.log(p)
   
    list.append(p);
    if (search !== "") {
      list.style.display = "block";
    }
    if (search == "") {
      list.style.display = "none";
    }
  });
  if(data.length > 3){
      list.style.overflowY="scroll";
  }
  else{
      list.style.overflow="hidden";
  }
console.log(data.length)
}

document.onclick = function (even) {
  if (even.target.id !== "movie") {
    list.style.display = "none";
  }
};
document.onload = function () {
  document.oninput = function (event) {
    if (event.target.id !== list) {
      list.style.display = "block";
    }
  };
};
async function main() {
  try {
    let data = await get();
    if (data === undefined) {
      return false;
    }
    append(data);
  } catch (err) {
    console.log(err);
  }
}

function debounce(func, delay) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    func();
  }, delay);
}

function display(data) {
  data.forEach(function (el) {
    cont.innerHTML = "";
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.Poster;
    let h3 = document.createElement("h3");
    h3.innerText = el.Title;
    let h4 = document.createElement("h4");
    h4.innerText = "Released in" + el.Year;
    let h5 = document.createElement("h5");
    h5.innerText = "Rating: 8.0";

    div2.append(h3, h4, h5);
    div1.append(img, div2);

    if (el.Poster == "N/A") {
      console.log("hello  ");

      cont.append(error, con);
    } else {
      cont.append(div1);
    }
  });
}

var imgArr = [
  {
    img: "data:image/jpeg;base64,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",
  },
  {
    img: "https://images.news18.com/ibnlive/uploads/2021/09/antim-poster-163099985616x9.jpg",
  },
  {
    img: "https://img.theweek.in/content/dam/week/review/movies/images/2021/10/29/dybbuk-poster.jpg",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BN2ZhZDJhNDYtZDFmOS00YmE1LTk2M2YtNmIyZWM1NTQwMGJjXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
  },
  {
    img: "https://www.koimoi.com/wp-content/new-galleries/2022/01/out-of-the-closet-tomorrow-here-is-badhaai-dos-new-motion-poster-001.jpg",
  },
];
//console.log(imgArr[0].img)
let id;
let a = document.querySelector("#slideshow");
let img1 = document.createElement("img");
img1.src = imgArr[0].img;
a.append(img1);
let i = 1;
setInterval(function () {
  if (i == imgArr.length) {
    i = 0;
  }
  a.innerHTML = "";
  let img1 = document.createElement("img");
  img1.src = imgArr[i].img;
  a.append(img1);
  i++;
}, 3000);

function data(m, n, o, p) {
  this.name = m;
  this.img = n;
  this.date = o;
  this.rating = p;
}
let movie1 = new data(
  "Suryavanshi",
  "https://www.pinkvilla.com/files/sooryavanshi_poster.jpeg",
  "5 November 2021",
  "6.7"
);
let movie2 = new data(
  "Antim",
  "https://images.news18.com/ibnlive/uploads/2021/09/antim-poster.jpg",
  "26 November 2021",
  "8.1"
);
let movie3 = new data(
  "Love Story",
  "https://m.media-amazon.com/images/M/MV5BNDFmNDk3MWMtMDY0NS00ZGFmLTlkYTUtNmUwYTU4YzllNTNhXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_FMjpg_UX1000_.jpg",
  "22 April 2020",
  "7.3"
);
let movie4 = new data(
  "Enemy",
  "https://www.thehindu.com/entertainment/movies/i7fgh7/article37335268.ece/alternates/FREE_435/Enemy-image1",
  "4 November 2021",
  "6.9"
);
let movie5 = new data(
  "Pushpa",
  "https://telugubullet.com/pushpa-movie-posters/pushpa-movie-1/",
  "7 January 2022",
  "8"
);
let movie6 = new data(
  "Chhori",
  "https://cdn.bollywoodmdb.com/movies/largethumb/2020/chhori/chhori-poster-4.jpg",
  "26 November 2021",
  "6.5"
);
let movie7 = new data(
  "Shiddat",
  "https://static.digit.in/OTT/v2/images/tr:n-ott_home_crousel/shiddat-447748.jpg",
  "1 October 2021",
  "8.3"
);
let movie8 = new data(
  "Atrangi Re",
  "https://pbs.twimg.com/media/Ec8qyDLXgAMriyi?format=jpg&name=large",
  "12 December 2021",
  "6.6"
);
let movie9 = new data(
  "Sanak",
  "https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/8407/1068407-v-0b0cfa8d9f74",
  "15 October 2021",
  "7.4"
);
var movieArr = [];
movieArr.push(
  movie1,
  movie3,
  movie2,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
  movie9
);
console.log(movieArr);
localStorage.setItem("movies", JSON.stringify(movieArr));
var b = document.getElementById("movies");

function display(movieArr) {
  movieArr.map(function (elem) {
    var box1 = document.createElement("div");
    var img1 = document.createElement("img");
    img1.src = elem.img;
    var name1 = document.createElement("h2");
    name1.innerText = elem.name;
    var date1 = document.createElement("h4");
    date1.innerText = elem.date;
    var rate = document.createElement("h4");
    rate.innerText = elem.rating;
    box1.append(img1, name1, date1, rate);
    b.append(box1);
  });
}

display(movieArr);
function sortIt() {
  b.innerHTML = "";
  var s = document.getElementById("sort").value;

  console.log(s);
  if (s == "l2h") {
    movieArr.sort(function (a, b) {
      return a.rating - b.rating;
    });
    display(movieArr);
  } else {
    movieArr.sort(function (a, b) {
      return b.rating - a.rating;
    });
    display(movieArr);
  }
}
