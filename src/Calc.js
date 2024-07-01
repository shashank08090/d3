import React, { useState, useCallback, useMemo } from 'react';
import './Calc.css';
import useCalculator from './useCalculator';

// Custom hook for calculator logic


const Calculator = () => {
  const { input, displayResult, handleClick } = useCalculator();

  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value={input} readOnly />
      <div className="calculator-buttons">
        <div className="row">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('=')}>=</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('C')}>C</button>
        </div>
      </div>
      <div className="calculator-result">{displayResult}</div>
    </div>
  );
};

export default Calculator;
