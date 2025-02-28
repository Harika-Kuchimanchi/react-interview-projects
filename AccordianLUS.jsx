import React, { useState } from 'react';
const content = [
  {
    id: 1,
    headText: 'Date.now() Equivalent to new Date().getTime()?',
    paraText: `console.log(new Date().getTime()); // 1708300502345.
    console.log(Date.now()); // 1708300502345 (milliseconds)`,
  },
  {
    id: 2,
    headText: 'Understanding Date.now() in JavaScript',
    paraText: `Date.now() is a static method of the Date object that returns the
    current timestamp in milliseconds since the Unix Epoch (January 1,
    1970, 00:00:00 UTC).`,
  },
  {
    id: 3,
    headText: 'Difference between Date.now() and new Date() in JavaScript',
    paraText: `new Date() → Returns a Date object formatted as a human-readable
    string when logged. Date.now() → Returns a timestamp (number of
    milliseconds).`,
  },
];

const AccordianItem = ({ id, headText, paraText, open, setOpen }) => {
  const handleToggle = (id) => {
    setOpen(open === id ? null : id);
  };
  return (
    <div
      style={{
        backgroundColor: 'lightgray',
        padding: '10px',
        margin: '10px',
      }}
      key={id}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>{headText}</h3>
        <button
          style={{ width: '25px', height: '20px' }}
          onClick={() => handleToggle(id)}
        >
          {open === id ? '-' : '+'}
        </button>
      </div>
      {open === id && <p>{paraText}</p>}
    </div>
  );
};
const AccordianLUS = () => {
  const [open, setOpen] = useState(null);
  return (
    <>
      <h1>Accordian Lifting Up State</h1>
      {content.map(({ id, headText, paraText }) => (
        <AccordianItem
          id={id}
          headText={headText}
          paraText={paraText}
          open={open}
          setOpen={setOpen}
        />
      ))}
    </>
  );
};

export default AccordianLUS;
