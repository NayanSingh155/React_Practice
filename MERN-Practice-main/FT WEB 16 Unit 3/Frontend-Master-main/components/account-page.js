const account = () => {
  return `<div class="account-wrap">
    <h1>My Account</h1>
    <div class="my-account">
      <div class="account-nav">
        <ul id="navigation">
          <li class="active">Account</li>
          <li>Subscription</li>
          <li>Payment</li>
          <li>Invoices</li>
          <li>Workshops</li>
        </ul>
      </div>
      <div class="account-body">
        <div class="settings active">
          <h2>Update User</h2>
          <form id="update_user">
            <div class="vertical-margin">
              <label for="email">Email</label>
              <input required type="email" id="email" />
            </div>
            <div class="horizontal">
              <div class="vertical-margin">
                <label for="username">First Name</label>
                <input required type="text" id="first_name" />
              </div>
              <div class="vertical-margin">
                <label for="username">Last Name</label>
                <input required type="text" id="last_name" />
              </div>
            </div>
            <div class="submit-container">
              <input type="submit" value="Update" id="update" />
            </div>
          </form>
          <h2>Change Password</h2>
          <form id="update_password">
          <div class="alert-msg"></div>
            <div class="vertical-margin">
              <label for="new_password">New Password</label>
              <input required type="password" id="new_password" />
            </div>
            <div class="vertical-margin">
              <label for="new_password_again">Confirm Password Again</label>
              <input required type="password" id="new_password_again" />
            </div>
            <div class="submit-container">
              <input type="submit" value="Update" id="update_pass" />
            </div>
          </form>
        </div>
        <div class="settings">
          <h2>Upgrade Subscription</h2>
          <div class="subscriptions">
            <div class="sub-box active">
              <div class="sub-head">
                <div class="sub-name">
                  <p>MONTHLY</p>
                </div>
                <div class="sub-price">
                  <p>$39</p>
                </div>
              </div>
              <div class="sub-para">
                <p>
                  Access all premium courses, workshops, and mobile apps.
                  Renewed monthly.
                </p>
              </div>
            </div>
            <div class="sub-box">
              <div class="sub-head">
                <div class="sub-name">
                  <p>YEARLY</p>
                </div>
                <div class="sub-price">
                  <p>$390</p>
                </div>
              </div>
              <div class="sub-para">
                <p>Access everything. Renewed yearly. Save $78 per year!</p>
              </div>
            </div>
            <div class="sub-box">
              <div class="sub-head">
                <div class="sub-name">
                  <p>MONTHLY TEAM</p>
                </div>
                <div class="sub-price">
                  <p>$195</p>
                </div>
              </div>
              <div class="sub-para">
                <p>
                  Access for 10 people at your company, renewed monthly.
                  Save 50% on our monthly plans!
                </p>
              </div>
            </div>
            <div class="sub-box">
              <div class="sub-head">
                <div class="sub-name">
                  <p>YEARLY TEAM</p>
                </div>
                <div class="sub-price">
                  <p>$1950</p>
                </div>
              </div>
              <div class="sub-para">
                <p>
                  Access for 10 people at your company, renewed yearly. Save
                  50% on our yearly plans!
                </p>
              </div>
            </div>
          </div>
          <form id="payment">
            <div class="vertical-margin">
              <label for="username">Choose Your Payment Method</label>
              <select required id="payment_option">
                <option value="Credit / Debit Card">
                  Credit / Debit Card
                </option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>
            <div class="card">
              <input
                required
                type="text"
                id="card_number"
                placeholder="Card Number"
              />
              <input required type="text" id="expiry" placeholder="MM/YY" />
              <input required type="text" id="cvc" placeholder="CVC" />
            </div>
            <div class="submit-container">
              <input type="submit" value="Upgrade" id="upgrade_plan" />
            </div>
          </form>
        </div>
        <div class="settings">
          <h2>Update Credit Card</h2>
          <h2>
            You don't have a subscription attached to a payment method.
          </h2>
        </div>
        <div class="settings">
          <h2>Invoice Address</h2>
          <form id="invoice">
            <div class="checkbox-container">
              <label for="checkbox"></label><input type="checkbox" id="checkbox" />
              Show Company Info on Invoices?</label>
            </div>
            <div class="submit-container">
              <input type="submit" value="Update" id="update_invoice" />
            </div>
          </form>
        </div>
        <div class="settings">
          <h2>Upcoming Workshops</h2>
        </div>
      </div>
    </div>
  </div>`;
};

export default account;
