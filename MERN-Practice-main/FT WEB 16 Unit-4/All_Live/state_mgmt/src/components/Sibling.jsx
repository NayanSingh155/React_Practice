import React from "react";
const Child = ({ value }) => {};

function Sibling() {
  const [count, setCount] = React.useState(0);
  const handleChange = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <h1>Sibling</h1>
    </div>
  );
}

export default Sibling;
