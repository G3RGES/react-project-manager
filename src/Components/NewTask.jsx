import React, { useState } from "react";

const NewTask = ({ addTask }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    addTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center justify-between">
      <input
        onChange={handleChange}
        value={enteredTask}
        className="focus:outline-none border-b-2 rounded-sm
         border-stone-300 w-64 px-2 py-1 bg-stone-200"
        type="text"
        placeholder="Add new task to you project"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
