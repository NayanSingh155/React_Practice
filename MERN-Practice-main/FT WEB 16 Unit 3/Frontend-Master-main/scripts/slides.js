const appendTwitterData = (data) => {
  let parent = document.querySelector(".slides");
  parent.innerHTML = null;
  data.map((el) => {
    let slide = document.createElement("div");
    slide.className = "slide";

    let arr = el;
    arr.map((item) => {
      // Slider Box
      let slider_box = document.createElement("div");
      slider_box.className = "slider-box";

      //Top
      let slider_box_top = document.createElement("div");
      slider_box_top.className = "slider-box-top";

      let profile_img = document.createElement("div");
      profile_img.className = "profile-img";

      let img = document.createElement("img");
      img.src = item.profile_pic;
      profile_img.append(img);

      let user_div = document.createElement("div");
      user_div.className = "user";

      let profile_name = document.createElement("p");
      profile_name.className = "profile-name";
      profile_name.innerText = item.name;

      let user_name = document.createElement("p");
      user_name.className = "user-name";
      user_name.innerText = item.user_name;

      user_div.append(profile_name, user_name);

      let icon_div = document.createElement("div");
      icon_div.className = "twit-icon";

      icon_div.innerHTML = `<i class="fab fa-twitter"></i>`;

      //Mid
      let slider_box_mid = document.createElement("div");
      slider_box_mid.className = "slider-box-mid";

      let msg = document.createElement("p");
      msg.className = "msg";
      msg.innerText = item.msg;

      //Bottom
      let slider_box_bottom = document.createElement("div");
      slider_box_bottom.className = "slider-box-bottom";

      let time = document.createElement("p");
      time.className = "time";
      time.innerText = item.time;

      slider_box_top.append(profile_img, user_div, icon_div);
      slider_box_mid.append(msg);
      slider_box_bottom.append(time);
      slider_box.append(slider_box_top, slider_box_mid, slider_box_bottom);

      slide.append(slider_box);
    });
    parent.append(slide);
  });
};

export { appendTwitterData };
