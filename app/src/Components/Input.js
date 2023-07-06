import React, { useState } from 'react'

function InputComponent(props) {
    const [userInput, setUserInput] = useState('')

    // Prevents the automatic reload, provides input with a unique ID, resets userInput back to empty string
    const handleSubmit = (e) => {
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

    // Changes the userInput to the value entered in the input box
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    return (
        <div>
            <form className='toDoForm' onSubmit={handleSubmit}>
                <input type='text' value={userInput} onChange={handleChange}></input>
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default InputComponent