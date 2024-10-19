import React, { useEffect, useState } from "react";

export default function UseEffectHooks() {
  const [date, setDate] = useState(new Date().toISOString()); // State for date
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((c) => c + 1);
      setDate(new Date().toLocaleTimeString()); // Update date every second
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="center">
      <h3>counter re-render: {count}</h3>
      <p>{date}</p>
    </div>
  );
}
