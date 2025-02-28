import React, { useState, useEffect } from 'react';
import './style.css';

function Example() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((values) => setData(values));
  }, []);
  return (
    <div>
      <h3>When there is single object use "Object.keys()" method</h3>
      {Object.keys(data).map((el) => (
        <p>{`Key is ${el} value is ${data[el]}`}</p>
      ))}
    </div>
  );
}

export default Example;
