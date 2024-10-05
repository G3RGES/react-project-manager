import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onCreateProject }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onCreateProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">invalid input</h2>
        <p className="text-stone-600 mb-4">
          Looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">Provide valid values</p>
      </Modal>
      <div className="w-[35rem] mt-16  ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li className="">
            <button className="uppercase text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li className="">
            <button
              onClick={handleSave}
              className="uppercase px-6 py-2 rounded-md bg-stone-800
            text-stone-50 hover:bg-stone-950 "
            >
              Save
            </button>
          </li>
        </menu>

        <div className="">
          <Input label="Title" ref={title} type="text" />
          <Input label="Description" textarea ref={description} />
          <Input label="Due Date" type="date" ref={dueDate} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
