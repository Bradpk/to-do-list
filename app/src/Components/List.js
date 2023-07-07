import React, { useState } from 'react';
import InputComponent from './Input';
//---------------------------------------------------------------------------------------------------------------------
function ListComponent() {
    const [toDoList, setToDoList] = useState([]);
    const [currentView, setCurrentView] = useState('All');
//---------------------------------------------------------------------------------------------------------------------
    const addItem = (item) => {
      setToDoList([item, ...toDoList]);
    };
//---------------------------------------------------------------------------------------------------------------------
    const deleteItem = (itemId) => {
      const updatedItems = toDoList.filter((item) => item.id !== itemId);
      setToDoList(updatedItems);
    };
//---------------------------------------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------------------------------------
    const filterListByView = () => {
      if (currentView === 'All') {
        return toDoList;
      } else if (currentView === 'Completed') {
        return toDoList.filter((item) => item.completed);
      } else if (currentView === 'To-Do') {
        return toDoList.filter((item) => !item.completed);
      }
    };
//---------------------------------------------------------------------------------------------------------------------
    const clearList = () => {
      setToDoList([]);
    };
//---------------------------------------------------------------------------------------------------------------------
    return (
      <div>
        <InputComponent onSubmit={addItem} />
  
        <ul>
          {filterListByView().map((item) => (
            <li className="list" key={item.id}>
              <span
                onClick={() => toggleItemCompletion(item.id)}
                style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
              >
                {item.text}
              </span>
              <button className="delete" onClick={() => deleteItem(item.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
  
        <div className="buttons">
          <button
            onClick={() => setCurrentView('All')}
            className={currentView === 'All' ? 'selected' : ''}
          >
            Show All
          </button>
          <button
            onClick={() => setCurrentView('Completed')}
            className={currentView === 'Completed' ? 'selected' : ''}
          >
            Completed
          </button>
          <button
            onClick={() => setCurrentView('To-Do')}
            className={currentView === 'To-Do' ? 'selected' : ''}
          >
            Not Completed
          </button>
          <button className="clear" onClick={clearList}>
            Clear All
          </button>
        </div>
      </div>
    );
  }
//---------------------------------------------------------------------------------------------------------------------
export default ListComponent;