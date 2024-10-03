import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div className="">
      <menu className="">
        <li className="">
          <button className="">Cancel</button>
          <button className="">Save</button>
        </li>
      </menu>

      <div className="">
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
