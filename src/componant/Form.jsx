import React, { useState } from "react";

export default function Form() {
  // let [fullName, SetFullname] = useState("");
  // let [userName, setUserName] = useState("");

  // const handleNameChange = (e) => {
  //   SetFullname(e.target.value);
  // };
  // const handleUserChange = (e) => {
  //   setUserName(e.target.value);
  // };

  let [formData, setFormData] = useState({ fullName: "", userName: "" });
  return (
    <div className="center form-container">
      <label htmlFor="fullname">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={fullName}
        onChange={handleNameChange}
        id="fullname"
      />
      <label htmlFor="username">username</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleUserChange}
        id="username"
      />
      <button>Submit</button>
    </div>
  );
}
