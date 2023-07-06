import React, { useState } from 'react'

function InputComponent(props) {
    const [userInput, setUserInput] = useState('')

// Handle Input Function
    const handleInput = (e) => {
        e.preventDefault()

        if (userInput !== '') {
            props.onSubmit({
                id: Math.floor(Math.random() * 100000),
                text: userInput,
                completed: false
            })
            setUserInput('')
        }
    }

// Handle Change Function
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    return (
        <div>
            <form className='toDoForm' onSubmit={handleInput}>
                <input type='text' value={userInput} onChange={handleChange}></input>
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default InputComponent