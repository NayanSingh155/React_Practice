import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [show, setShow] = useState("");
  const [text, setText] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    axios
      .post("https://mock-12.herokuapp.com/shrinkUrl", data)
      .then((res) => {
        setShow(res.data.short)
        // setData({})
      });
  };
  function copy() {
    navigator.clipboard.writeText(text);
    alert("Text Copied");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>URL Shortner</h1>
        <div>
          <label>Put Your URL here</label>

          <input
            required
            type="text"
            name="yourUrl"
            placeholder="URL"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Enter Custom Name</label>
          <input
            type="text"
            name="customUrl"
            placeholder="customUrl"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Short</button>
        <br />
      </form>
      {show ? (
        <>
          <h4>
            Your URL is: <a href={data.yourUrl}>{show}</a>
          </h4>
          <button onClick={() => copy()}>Copy</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
