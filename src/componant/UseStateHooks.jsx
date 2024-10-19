import React, { useState } from "react";

export default function UseStateHooks() {
  const [num, setNum] = useState(5);
  const add = () => {
    if (num < 10) {
      setNum(num + 1);
    } else {
      alert("counter not go above 10");
    }
  };
  const sub = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("counter not below 0");
    }
  };
  return (
    <div className="center">
      <h2>Counter :{num}</h2>
      <button className="increment" onClick={add}>increment +</button> <span></span>
      <button className="decrement" onClick={sub}>decrement -</button>
    </div>
  );
}
