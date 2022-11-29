import React from "react";
import { useEffect } from "react";
export default function Timer() {
  const [counter, setCounter] = React.useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((p) => {
        if (p > 0) {
          return p - 1;
        } else {
          clearInterval(interval);
          return p;
        }
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div></div>
      count is :{counter}
    </div>
  );
}
