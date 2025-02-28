import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(20);
  useEffect(() => {
    if (count <= 0) return;
    let timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
