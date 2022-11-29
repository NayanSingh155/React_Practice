import axios from "axios";
export const postData = (payload) => () => {
  axios
    .post(`https://mock15.herokuapp.com/users`, payload)
    .then(() => alert("Successfully Registered"));
};
