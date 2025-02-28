import React, { useState } from 'react';

const Questions = [
  {
    id: 1,
    ques: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid'],
  },
  {
    id: 2,
    ques: 'Who wrote "Hamlet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen'],
  },
  {
    id: 3,
    ques: 'What is the smallest planet in our solar system?',
    options: ['Mercury', 'Mars', 'Pluto'],
  },
  {
    id: 4,
    ques: 'Which is the longest river in the world?',
    options: ['Nile', 'Amazon', 'Yangtze'],
  },
  {
    id: 5,
    ques: 'Who discovered gravity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei'],
  },
  {
    id: 6,
    ques: 'Which is the national animal of India?',
    options: ['Tiger', 'Lion', 'Elephant'],
  },
  {
    id: 7,
    ques: 'What is the chemical symbol for water?',
    options: ['H2O', 'O2', 'CO2'],
  },
  {
    id: 8,
    ques: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
  },
  {
    id: 9,
    ques: 'Which country hosted the 2022 FIFA World Cup?',
    options: ['Qatar', 'Brazil', 'Russia'],
  },
  {
    id: 10,
    ques: 'What is the largest ocean on Earth?',
    options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean'],
  },
];

const Question = ({ id, question, options, handleChange }) => (
  <div>
    <h3>{question}</h3>
    {options.map((option) => (
      <label key={option}>
        <input
          type="radio"
          value={option}
          name={`question-${id}`}
          onChange={() => handleChange(id)}
        />
        {option}
      </label>
    ))}
  </div>
);

const Quiz = () => {
  const [selected, setSelected] = useState({});
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (questionId) => {
    setSelected((prev) => ({ ...prev, [questionId]: true }));
    setIsSubmitted(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const answeredCount = Object.keys(selected).length;
    if (answeredCount > 0) {
      setScore(answeredCount * 5);
      setIsSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Questions.map(({ id, ques, options }) => (
        <Question
          key={id}
          id={id}
          question={ques}
          options={options}
          handleChange={handleChange}
        />
      ))}
      <div style={{ margin: '20px' }}>
        <button>SUBMIT</button>
        {isSubmitted && <p>Score: {score}</p>}
      </div>
    </form>
  );
};

export default Quiz;
