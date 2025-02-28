import React, { useReducer } from 'react';

const Button = ({ type, handleClick }) => {
  return <button onClick={handleClick}>{type}</button>;
};
const Input = ({ handleChange }) => {
  return <input type="Number" onChange={handleChange} />;
};
const initialState = {
  input1: 0,
  input2: 0,
  result: 0,
};
const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case 'input1':
      return { ...state, input1: Number(payload) };
    case 'input2':
      return { ...state, input2: Number(payload) };
    case 'add':
      return { ...state, result: state.input1 + state.input2 };
    case 'sub':
      return { ...state, result: state.input1 - state.input2 };
    case 'div':
      return { ...state, result: state.input1 / state.input2 };
  }
};
const Calculator = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <>
      <div>
        <Input
          handleChange={(e) =>
            dispatch({ type: 'input1', payload: e.target.value })
          }
        />
        <Input
          handleChange={(e) =>
            dispatch({ type: 'input2', payload: e.target.value })
          }
        />
      </div>
      <div>
        <Button handleClick={() => dispatch({ type: 'add' })} type="ADD" />
        <Button handleClick={() => dispatch({ type: 'sub' })} type="SUB" />
        <Button handleClick={() => dispatch({ type: 'div' })} type="DIV" />
      </div>
      <p>{state.result}</p>
    </>
  );
};

export default Calculator;
