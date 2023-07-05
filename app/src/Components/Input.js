import React, {useState} from 'react'

function InputComponent() {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
<form className='toDoForm'>
    <input type='text'></input>
    <button>Add Item</button>
</form>
        </div>
    )
}

export default InputComponent