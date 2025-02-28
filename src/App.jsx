import React from 'react';
import FetchData from './components/FetchData';
import { ThemeProvider } from './components/ThemeContext';
import { LangugaeContextProvider } from './components/LanguageContext';
import ContextAPIComp from './components/ContextAPIComp';
import Counter from './components/Counter';
import Quiz from './components/Quiz';
import Example from './components/Example';
import Pagination from './components/Pagination';
import PaginationJump from './components/PaginationJump';
import Accordian from './components/Accordian';
import AccordianLUS from './components/AccordianLUS';
import Library from './components/Library';
import Library1 from './components/Library1';
import TodoList from './components/TodoList';
import { CSSExample } from './components/CSSExample';
import Interview from './components/Interview';
import Carousal from './components/Carousal';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <>
      <LangugaeContextProvider>
        <ThemeProvider>
          <ContextAPIComp />
        </ThemeProvider>
      </LangugaeContextProvider>
      <FetchData />
      <Counter />
      <Quiz />
      <Example />
      <Pagination />
      <PaginationJump />
      <Accordian />
      <AccordianLUS />
      <Library />
      <Library1 />
      <TodoList />
      <br />
      <CSSExample />
      <Interview />
      <Carousal />
      <Calculator />
    </>
  );
};
export default App;
