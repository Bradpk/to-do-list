import React, { useState } from 'react'
import InputComponent from './Input'

function ListComponent() {
    const [toDoList, setToDoList] = useState([])

    const addItem = (item) => {
       const newItems = [item, ...toDoList]
       setToDoList(newItems)
    }

    return (
        <div>
            <InputComponent onSubmit={addItem}/>
           
        </div>
    )
}

export default ListComponent