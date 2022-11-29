const forgot = () => {
  return `<div class="forgot-wrap">
      <form id="forgot-pass">
        <div class="alert-msg"></div>
        <div class="vertical-margin">
          <label for="username">Enter your email or username and we'll email you a link to reset your password.</label>
          <input required type="text" id="email" placeholder="Username or Email" />
        </div>
        <div class="vertical-margin">
          <label for="username">New Password</label>
          <input required type="password" id="new-pass" placeholder="Enter New Password" />
        </div>
        <div class="f-submit-container">
          <input type="submit" value="Reset Password" id="reset" />
        </div>
      </form>
    </div>`;
};

export default forgot;
