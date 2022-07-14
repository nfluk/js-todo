import React from 'react';
import Header from './components/Header';
import Form from './components/Form.js';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header title="ToDo App" />
      <Form />
      <Todos className="todo" />
    </div>
  );
}

export default App;
