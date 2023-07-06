import React, { useState } from 'react'
import InputComponent from './Input'

function ListComponent() {
    const [toDoList, setToDoList] = useState([])

    const addItem = (item) => {
       const newItems = [item, ...toDoList]
       setToDoList(newItems)
    }

    const clearList = () => {
        setToDoList([]);
      };
    

    return (
        <div>
            <InputComponent onSubmit={addItem}/>
            <ul>
        {toDoList.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button onClick={clearList}>Clear</button>
        </div>
    )
}

export default ListComponent