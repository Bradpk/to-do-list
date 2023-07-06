import React, { useState } from 'react'
import InputComponent from './Input'

function ListComponent() {
    const [toDoList, setToDoList] = useState([]);
  
    const addItem = (item) => {
      const newItems = [item, ...toDoList];
      setToDoList(newItems);
    };
  
    const clearList = () => {
      setToDoList([]);
    };
  
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
  
    return (
      <div>
        <InputComponent onSubmit={addItem} />
        <ul>
          {toDoList.map((item) => (
            <li
            className='list'
              key={item.id}
              onClick={() => toggleItemCompletion(item.id)}
              style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <button onClick={clearList}>Clear</button>
      </div>
    );
  }
  
  export default ListComponent;