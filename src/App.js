// App.js

import React from 'react';
import BarChart from './BarChart';
import './App.css'; // You can add custom styles if needed

const jsonData = [
  { "category": "A", "value": 20 },
  { "category": "B", "value": 50 },
  { "category": "C", "value": 30 },
  { "category": "D", "value": 40 },
  { "category": "E", "value": 25 }
];

function App() {
  return (
    <div className="App">
      <h1>Bar Graph with D3.js in React</h1>
      <div className="chart-container">
        <BarChart data={jsonData} />
      </div>
    </div>
  );
}

export default App;
