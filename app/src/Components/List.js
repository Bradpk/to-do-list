import React, { useState } from 'react';
import InputComponent from './Input';

function ListComponent() {
  const [toDoList, setToDoList] = useState([]);
  const [currentView, setCurrentView] = useState('All');

// Add Item Function
  const addItem = (item) => {
    const newItems = [item, ...toDoList];
    setToDoList(newItems);
  };

// Clear List Function 
  const clearList = () => {
    setToDoList([]);
  };

// Item Completion Function 
  const toggleItemCompletion = (itemId) => {
    const updatedItems = toDoList.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setToDoList(updatedItems);
  };

// Three View Function
  const filterListByView = () => {
    if (currentView === 'All') {
      return toDoList;
    } else if (currentView === 'Completed') {
      return toDoList.filter((item) => item.completed);
    } else if (currentView === 'To-Do') {
      return toDoList.filter((item) => !item.completed);
    }
  };

  return (
    <div>
      <InputComponent onSubmit={addItem} />
      <div>
        <button onClick={() => setCurrentView('All')}>Show All</button>
        <button onClick={() => setCurrentView('Completed')}>Completed</button>
        <button onClick={() => setCurrentView('To-Do')}>Not Completed</button>
        <button onClick={clearList}>Clear All</button>
      </div>
      <ul>
        {filterListByView().map((item) => (
          <li
            className="list"
            key={item.id}
            onClick={() => toggleItemCompletion(item.id)}
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;