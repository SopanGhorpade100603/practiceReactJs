import React, { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({ fullName: "", userName: "",password:"",});
  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newVal = event.target.value;

    setFormData((currData) => {
      currData[fieldName] = newVal;
      return { ...currData, [fieldName]: newVal };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData );
    
    setFormData({ fullName: "", userName: "", password:"" });
  };
  return (
    <div className="center form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.fullName}
          id="fullname"
          name="fullName"
          onChange={handleInputChange}
          required
        />
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.userName}
          id="username"
          name="userName"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          value={formData.password}
          id="password"
          name="password"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
