import React from 'react';
import FetchData from './FetchData';
import { ThemeProvider } from './ThemeContext';
import { LangugaeContextProvider } from './LanguageContext';
import ContextAPIComp from './ContextAPIComp';
import Counter from './Counter';
import Quiz from './Quiz';
import Example from './Example';
import Pagination from './Pagination';
import PaginationJump from './PaginationJump';
import Accordian from './Accordian';
import AccordianLUS from './AccordianLUS';
import Library from './Library';
import Library1 from './Library1';
import TodoList from './TodoList';
import { CSSExample } from './CSSExample';
import Interview from './Interview';
import Carousal from './Carousal';
import Calculator from './Calculator';

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
