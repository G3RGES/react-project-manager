import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, addTask, deleteTask }) => {
  return (
    <section className="">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask addTask={addTask} />
      <p className="text-stone-800 my-4">This project doesn't have any tasks</p>
      <ul className=""></ul>
    </section>
  );
};

export default Tasks;
