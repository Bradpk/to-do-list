import React, {useState} from 'react'

function InputComponent() {
    const [userInput, setUserInput] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
<form className='toDoForm' onSubmit={handleSubmit}>
    <input type='text'></input>
    <button>Add Item</button>
</form>
        </div>
    )
}

export default InputComponent