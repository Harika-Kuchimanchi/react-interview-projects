import React, { useState } from 'react';
const content = [
  {
    id: 1,
    headText: 'Why Use Date.now()?',
    paraText: `Useful for measuring execution time or setting expiry times.Helps
  compute differences between two timestamps.`,
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

const AccordianItem = ({ id, headText, paraText }) => {
  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    setOpen((prev) => !prev);
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
          onClick={handleToggle}
        >
          {open ? '-' : '+'}
        </button>
      </div>
      {open && <p>{paraText}</p>}
    </div>
  );
};
const Accordian = () => {
  return (
    <>
      <h1>Accordian</h1>
      {content.map(({ id, headText, paraText }) => (
        <AccordianItem id={id} headText={headText} paraText={paraText} />
      ))}
    </>
  );
};

export default Accordian;
