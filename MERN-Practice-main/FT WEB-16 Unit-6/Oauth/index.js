const express = require("express");

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let Client_id = "3524866ca5bd6fa581d8";
let client_secret = "9537cdb894a61593339f00c788d40951b0b75280";
app.get("/", (req, res) => {
  res.send(
    "<a href=`https://github.com/login/oauth/authorize?client_id=3524866ca5bd6fa581d8`>Login with git</a>"
  );
});
app.listen(8080, async () => {
  console.log("server started on 8080");
});

function main(n, arr) {
  let left = [];

  let right = [];

  let res = 0;

  left[0] = arr[0];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], arr[i]);
  }
  right[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], arr[i]);
  }

  for (let i = 0; i < n; i++) {
    res += Math.min(left[i], right[i]) - arr[i];
  }
  return res;
}
