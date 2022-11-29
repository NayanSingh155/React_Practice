import React from "react";
import { useEffect, useState } from "react";
const { io } = require("socket.io-client");

let ws;

const Table = () => {
  const [text, setText] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    ws = io("http://localhost:8080");
  }, []);

  useEffect(() => {
    ws.on("operation", (wss) => {
      setText(wss);
    });
    ws.on("data", (d) => {
      setData(d);
    });
  }, []);
  return (
    <div>
      <table style={{ width: "80%", borderCollapse: "collapse" }}>
        <tr>
          <th>Title</th>
          <th>Decrement</th>
          <th>Increment</th>
        </tr>
        <tr>
          <td>{text?.name}</td>
          <td>{text?.rounding}</td>
          <td>{text?.decimalDigits}</td>
        </tr>
      </table>

      <div>
        <table style={{ borderCollapse: "collapse", width: "80%" }}>
          <tr>
            <th>Title</th>
            <th>Symbol</th>
            <th>Decrement</th>
            <th>Inccrement</th>
          </tr>
          {data.map((el) => {
            return (
              <tr>
                <td>{el?.name}</td>
                <td>{el?.symbol}</td>
                <td>{el?.rounding}</td>
                <td>{el?.decimalDigits}</td>
                <td>
                  {" "}
                  <button>Buy</button>{" "}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
