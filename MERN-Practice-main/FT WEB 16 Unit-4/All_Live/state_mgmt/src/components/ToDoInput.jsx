import { useState } from "react";
export const ToDoInput = ({ addTodos }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          // console.log(e.target.value);
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodos(text);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
