import React, { useState, useEffect, useCallback } from 'react';

const todoItems = {
  1: { task: 'React Js', done: false },
  2: { task: 'Node Js', done: false },
  3: { task: 'Next Js', done: false },
};

const TodoItem = ({ item, todoList, handleDelete, setTodoList }) => {
  const handleDone = (item) => {
    setTodoList((prev) => ({
      ...prev,
      [item]: { task: prev[item].task, done: !prev[item].done },
    }));
  };

  return (
    <>
      <li
        style={{
          textDecoration: todoList[item].done ? 'line-through' : 'none',
        }}
      >
        {todoList[item].task}
      </li>
      <button onClick={() => handleDone(item)}>
        {todoList[item].done ? 'DONE' : 'NOT DONE'}
      </button>
      <button onClick={() => handleDelete(item)}>❌</button>
    </>
  );
};

const TodoList = () => {
  const getTodoList = JSON.parse(localStorage.getItem('todoList')) || {};
  const [todoList, setTodoList] = useState(
    Object.keys(getTodoList).length > 0 ? getTodoList : todoItems
  );
  const [newTodo, setnewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const handleAdd = (e) => setnewTodo(e.target.value);

  const handleAddTodo = () => {
    if (newTodo !== '') {
      setTodoList((prev) => ({
        ...prev,
        [Math.random() * 100 + 1]: { task: newTodo, done: false },
      }));
    }
    setnewTodo('');
  };

  const handleDelete = useCallback((item) => {
    setTodoList((prevList) => {
      const updatedList = { ...prevList };
      delete updatedList[item];
      return updatedList;
    });
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ol start={1}>
        {Object.keys(todoList).map((item) => (
          <TodoItem
            key={item}
            item={item}
            todoList={todoList}
            handleDelete={handleDelete}
            setTodoList={setTodoList}
          />
        ))}
      </ol>
      <input type="text" onChange={handleAdd} value={newTodo} name={newTodo} />
      <button onClick={handleAddTodo}>ADD TODO</button>
    </div>
  );
};

export default TodoList;
