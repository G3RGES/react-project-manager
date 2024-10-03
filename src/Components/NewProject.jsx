import React from "react";

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
        <p className="">
          <label className="">Title</label>
          <input className="" />
        </p>
        <p className="">
          <label className="">Description</label>
          <textarea className="" />
        </p>
        <p className="">
          <label className="">Due Date</label>
          <input className="" />
        </p>
      </div>
    </div>
  );
};

export default NewProject;
