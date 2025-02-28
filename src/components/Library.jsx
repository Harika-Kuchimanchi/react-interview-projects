import React, { useReducer, useState } from 'react';

const BooksStack = [
  {
    id: 1,
    title: 'Tell Me About Yourself',
    author: 'Sydney Sheldon',
  },
  {
    id: 2,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    id: 4,
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
  },
  {
    id: 5,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
  },
  {
    id: 6,
    title: 'The 5 AM Club',
    author: 'Robin Sharma',
  },
  {
    id: 7,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
  },
  {
    id: 8,
    title: 'Deep Work',
    author: 'Cal Newport',
  },
  {
    id: 9,
    title: 'Start With Why',
    author: 'Simon Sinek',
  },
  {
    id: 10,
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
  },
];
const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case 'add':
      return payload ? [...state, payload] : state;
    case 'remove':
      return state.filter((book) => book.id !== payload);
    case 'update':
      return state.map((book) =>
        book.id === payload.id ? { ...book, ...payload } : book
      );
  }
};
const Library = () => {
  const [books, dispatch] = useReducer(reducerFn, BooksStack);
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [editBook, setEditBook] = useState(null);
  const handleAdd = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (editBook) {
      setEditBook({ ...editBook, [name]: value });
    }
    setNewBook({ ...newBook, [name]: value });
  };

  return (
    <div>
      <h2>Library of Books with array of objects</h2>
      {books?.map((each) => (
        <ol start={each.id}>
          <li key={each.id}>
            Author of <strong>{each.title}</strong> is{' '}
            <strong>{each.author}</strong>
          </li>
          <button
            onClick={() => dispatch({ type: 'remove', payload: each.id })}
          >
            REMOVE BOOK
          </button>
          <button onClick={() => setEditBook(each)}>EDIT</button>
        </ol>
      ))}
      <input
        type="text"
        name="title"
        onChange={handleAdd}
        placeholder="title"
        value={editBook ? editBook.title : newBook.title}
      />
      <input
        type="text"
        name="author"
        onChange={handleAdd}
        placeholder="author"
        value={editBook ? editBook.author : newBook.author}
      />
      <br />
      <button
        onClick={() =>
          editBook
            ? dispatch({
                type: 'update',
                payload: editBook,
              })
            : setEditBook(null)
        }
      >
        EDIT BOOK
      </button>

      <button
        onClick={() =>
          newBook.title && newBook.author
            ? dispatch({
                type: 'add',
                payload: { ...newBook, id: books.length + 1 },
              })
            : setNewBook({ title: '', author: '' })
        }
      >
        ADD BOOK
      </button>
    </div>
  );
};

export default Library;
