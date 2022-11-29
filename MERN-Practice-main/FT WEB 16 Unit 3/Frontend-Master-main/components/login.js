const login = () => {
  return `<div class="login-wrap">
    <form id="login-form">
        <div class="alert-msg"></div>
      <div class="vertical-margin">
        <label for="username">Username or Email</label>
        <input required type="text" id="email" placeholder="Username or Email" />
      </div>
      <div class="vertical-margin">
        <label for="password">Password</label>
        <input required type="password" placeholder="Password" id="password" />
      </div>
      <div class="checkbox-container">
        <label for="checkbox"></label><input type="checkbox" id="checkbox" />
        Remember Me</label>
      </div>
      <div class="submit-container">
        <input type="submit" value="Login" id="login" />
        <a href="forgot-password.html">Forgot your password?</a>
      </div>
    </form>
  </div>`;
};

export default login;
