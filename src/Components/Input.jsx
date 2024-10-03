import React from "react";

const Input = ({ label, textarea, ...props }) => {
  return (
    <p className="">
      <label className="">{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
};

export default Input;
