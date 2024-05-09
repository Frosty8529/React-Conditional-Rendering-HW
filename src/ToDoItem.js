import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ priority, number }) => {
  return (
    <div className={`todo-item ${priority === 0 ? 'priority-high' : ''}`}>
      <p>ToDoItem {number}</p>
    </div>
  );
};

export default ToDoItem;
