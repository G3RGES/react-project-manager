import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, addTask, deleteTask }) => {
  return (
    <section className="">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask addTask={addTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li
              className="flex items-center justify-between my-4"
              key={task.id}
            >
              <span className="">{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={deleteTask}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
