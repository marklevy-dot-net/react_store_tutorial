import React from 'react';

import './App.css';

const gradeBook = [{
  id: 1,
  grade: 58
}, {
  id: 2,
  grade: 64
}, {
  id: 3,
  grade: 91
}];

function getReactVersion() {
  return React.version;
}

function createTitle() {
  return React.createElement("h1", {className: "hero-title"}, "Welcome to our supermarket");
}

function getPassingTests(results) {
  console.log(results);
  console.log(results.filter(result => result.grade >= 60));
  // return results.filter(result => result.grade >= 60);
}

function sayLouder(text) {
  return text.toUpperCase();
}

function getPositiveNumbers(numbers) {
  return numbers.filter(n => n > 0);
}

function App() {
  return (
    <div className="App">
      { createTitle() }
      <p>1: { sayLouder("hello nurse") }</p>
      <p>2: { getPositiveNumbers([11, 12, -5, -4, 420]) }</p>
      <p>3: { getPassingTests(gradeBook) }</p>
      <p>4: { getReactVersion() }</p>
    </div>
  );
}

export default App;
