import React from 'react';
import ToDoItem from './ToDoItem';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="todo-list">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <ToDoItem key={number} number={number} priority={number === 1 || number === 3 ? 0 : 1} />
        ))}
      </div>
    </div>
  );
}

export default App;
