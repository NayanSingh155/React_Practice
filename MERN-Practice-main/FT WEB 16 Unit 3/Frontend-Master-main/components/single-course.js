let single_course_data = JSON.parse(localStorage.getItem("single_course"));

const single_course = () => {
  return `<div class="course-head">
    <div class="course-head-wrap">
      <div class="wrap-left">
        <img
          src="${single_course_data.bg}"
          alt=""
        />
      </div>
      <div class="wrap-right">
        <h1>${single_course_data.title}</h1>
        <div class="instructor">
          <div class="profile">
            <img
              src="${single_course_data.profile}"
              alt=""
            />
          </div>
          <div class="details">
            <p class="name">${single_course_data.name}</p>
            <p class="org">${single_course_data.org}</p>
          </div>
        </div>
        <div class="duration">
          <p class="time">${single_course_data.time}<strong>CC</strong></p>
        </div>
      </div>
    </div>
  </div>
  <div class="course-details-container">
    <div class="course-detail-wrap">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/zXrhhYLah20?controls=0">
        </iframe>
      </div>
      <div class="course-desc">
        <div class="desc-top">
          <p class="desc">
            ${single_course_data.description}
          </p>
          <p class="published">${single_course_data.publish}</p>
        </div>
        <div class="desc-bottom">
          <a href="joinnow.html">Get Full Unlimited Access</a>
        </div>
      </div>
    </div>
  </div>`;
};

export default single_course;
