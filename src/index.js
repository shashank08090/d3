import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calc from './Calc';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';
import ErrorBoundary2 from './ErrorBoundary2';
import { CounterProvider } from './CounterContext';
import Counter2 from './Counter2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Calc /> */}
    <ErrorBoundary2 >
      <CounterProvider>
      <Counter2 />
      </CounterProvider>
    </ErrorBoundary2>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
