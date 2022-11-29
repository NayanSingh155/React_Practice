import React from "react";
const Child = ({ value, handleInc, handleDec }) => {
  return (
    <div>
      <h3>Count is : {value}</h3>
      <div>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </div>
    </div>
  );
};
function ChildToParent() {
  const [count, setCount] = React.useState(0);
  const handleChange = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <h1>ChildToParent</h1>
      <Child
        value={count}
        handleInc={() => handleChange(1)}
        handleDec={() => handleChange(-1)}
      />
    </div>
  );
}
export { ChildToParent };
