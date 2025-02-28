import React, { useReducer, useState } from 'react';

const BooksStack = {
  1: {
    id: 1,
    title: 'Tell Me About Yourself',
    author: 'Sydney Sheldon',
  },
  2: {
    id: 2,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  3: {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  4: {
    id: 4,
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
  },
  5: {
    id: 5,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
  },
  6: {
    id: 6,
    title: 'The 5 AM Club',
    author: 'Robin Sharma',
  },
  7: {
    id: 7,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
  },
  8: {
    id: 8,
    title: 'Deep Work',
    author: 'Cal Newport',
  },
  9: {
    id: 9,
    title: 'Start With Why',
    author: 'Simon Sinek',
  },
  10: {
    id: 10,
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
  },
};
const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case 'add':
      return payload ? { ...state, [payload.id]: payload } : state;
    case 'remove':
      const newState = { ...state };
      delete newState[payload];
      return newState;
    case 'update':
      return { ...state, [payload.id]: { ...state[payload.id], ...payload } };
  }
};
const Library1 = () => {
  const [books, dispatch] = useReducer(reducerFn, BooksStack);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });
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
      <h2>Library of Books with object of objects</h2>
      {Object.keys(books)?.map((each) => (
        <ol start={books[each].id}>
          <li key={books[each].id}>
            Author of <strong>{books[each].title}</strong> is{' '}
            <strong>{books[each].author}</strong>
          </li>
          <button
            onClick={() =>
              dispatch({ type: 'remove', payload: books[each].id })
            }
          >
            REMOVE BOOK
          </button>
          <button onClick={() => setEditBook(books[each])}>EDIT</button>
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
                payload: {
                  ...newBook,
                  id: Object.keys(books).length + 1,
                },
              })
            : setNewBook({ title: '', author: '' })
        }
      >
        ADD BOOK
      </button>
    </div>
  );
};

export default Library1;
