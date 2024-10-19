import React, { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [click, setClick] = useState(0);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setClick(click + 1);
  };

  // let likeStyle = { color: "red" };

  return (
    <div className="center">
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart red" /* style={likeStyle} */></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
      <p>clicks = {click}</p>
    </div>
  );
}
