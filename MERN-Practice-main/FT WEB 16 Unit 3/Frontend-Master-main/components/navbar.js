function navbar() {
  let logged_user = JSON.parse(localStorage.getItem("logged_user"));
  if (logged_user) {
    // console.log(logged_user);
    return `<div class="wrap">
    <div class="header-wrap">
    <div class="left">
      <div class="logo">
        <a href="dashboard.html">
          <img
            src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg"
            alt="Front-End"
          />
        </a>
      </div>
    </div>
    <div class="right">
      <ul>
      <li><a href="dashboard.html">Home</a></li>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="learn.html">Learn</a></li>
      <li><a href="bootcamp.html">Bootcamp</a></li>
      <li><a href="account.html">My Account</a></li>
      <li class="logout"><a id="logout" href="#index.html">Log Out(${
        logged_user.fn
      } ${logged_user.ln})</a></li>
      </ul>
    </div>
    <div class="menu">
      <div class="icon">
      <i class="fas fa-bars"></i>
      </div>
    </div>
  </div>
  <div class="mobile">
      <ul>
        <li><a href="dashboard.html">Home</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="learn.html">Learn</a></li>
        <li><a href="bootcamp.html">Bootcamp</a></li>
        <li><a href="account.html">My Account</a></li>
        <li class="logout"><a id="logout" href="#index.html">Log Out(${
          logged_user.fn + logged_user.ln
        })</a></li>
      </ul>
    </div>
  <svg
    class="diagonal"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 10"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#c02d28"></stop op>
        <stop offset="100%" stop-color="#e66225"></stop>
      </linearGradient>
    </defs>
    <polygon points="0,2 0,0 100,0 100,10" fill="url(#linear)"></polygon>
  </svg>
  </div>`;
  } else {
    return `<div class="wrap">
  <div class="header-wrap">
  <div class="left">
    <div class="logo">
      <a href="index.html">
        <img
          src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg"
          alt="Front-End"
        />
      </a>
    </div>
  </div>
  <div class="right">
    <ul>
      <li><a href="courses.html">Courses</a></li>
      <li><a href="learn.html">Learn</a></li>
      <li><a href="joinnow.html">Pricing</a></li>
      <li><a href="Login.html">Login</a></li>
      <li><a href="joinnow.html">Join Now</a></li>
    </ul>
  </div>
  <div class="menu">
    <div class="icon">
    <i class="fas fa-bars"></i>
    </div>
  </div>
</div>
<div class="mobile">
    <ul>
    <li><a href="courses.html">Courses</a></li>
    <li><a href="learn.html">Learn</a></li>
    <li><a href="joinnow.html">Pricing</a></li>
    <li><a href="Login.html">Login</a></li>
    <li><a href="joinnow.html">Join Now</a></li>
    </ul>
  </div>
<svg
  class="diagonal"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 10"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c02d28"></stop op>
      <stop offset="100%" stop-color="#e66225"></stop>
    </linearGradient>
  </defs>
  <polygon points="0,2 0,0 100,0 100,10" fill="url(#linear)"></polygon>
</svg>
</div>`;
  }
}

export default navbar;
