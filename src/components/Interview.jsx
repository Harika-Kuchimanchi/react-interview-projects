import React, { useState, useEffect } from 'react';

const Interview = () => {
  const [todoData, setTodoData] = useState([]);
  const [newTodos, setNewTodo] = useState([]);
  const [nameStr, setNameStr] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://jsonplaceholder.typicode.com/comments');
      const res = await data.json();
      setTodoData(res.slice(0, 20));
    }
    fetchData();
  }, []);

  useEffect(() => {
    const urls = [
      'https://jsonplaceholder.typicode.com/posts/21',
      'https://jsonplaceholder.typicode.com/posts/22',
    ];
    async function fetchNextData() {
      const dataArr = await Promise.all(urls.map((url) => fetch(url)));
      const responses = await Promise.all(dataArr.map((res) => res.json()));
      setNewTodo([...todoData, ...responses]);
    }
    fetchNextData();
  }, [todoData]);

  useEffect(() => {
    const newStr = newTodos.map((each) => each?.name || '').join(' ');
    setNameStr(newStr);
  }, [newTodos]);

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>title1</th>
          <th>title2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{nameStr}</td>
          <td>{newTodos[newTodos.length - 1]?.title || 'N/A'}</td>
          <td>{newTodos[newTodos.length - 2]?.title || 'N/A'}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Interview;
