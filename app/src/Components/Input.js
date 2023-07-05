import React, { useState } from 'react'

function InputComponent(props) {
    const [userInput, setUserInput] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault()

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 100000),
        //     text: userInput
        // })
setUserInput('Cat')
    }

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