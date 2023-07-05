import React, { useState } from 'react'
import InputComponent from './Input'

function ListComponent() {
    const [toDoList, setToDoList] = useState([])

    const addItem = () => {
        
    }

    return (
        <div>
            <InputComponent />
        </div>
    )
}

export default ListComponent