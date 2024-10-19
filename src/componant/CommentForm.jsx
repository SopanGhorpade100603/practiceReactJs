import React, { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: "",
  });
  const handleInputChange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: "",
    });
  };
  return (
    <div className="center">
      <h4>Give a Comment!...</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
          id="username"
          required
        />
        <label htmlFor="remark">Remark</label>
        <input
          type="textarea"
          value={formData.remark}
          placeholder="Add few Remark"
          id="remark"
          name="remark"
          onChange={handleInputChange}
        />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
