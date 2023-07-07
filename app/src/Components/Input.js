import React, { useState } from 'react'
//---------------------------------------------------------------------------------------------------------------------
function InputComponent({ onSubmit }) {
    const [userInput, setUserInput] = useState('');
    //---------------------------------------------------------------------------------------------------------------------
    const handleInput = (e) => {
        e.preventDefault();
        if (userInput.trim() !== '') {
            onSubmit({
                id: Math.floor(Math.random() * 100000),
                text: userInput,
                completed: false
            });
            setUserInput('');
        }
    };
    //---------------------------------------------------------------------------------------------------------------------
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };
    //---------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <form onSubmit={handleInput}>
                <input type="text" value={userInput} onChange={handleChange} />
                <button>Add Item</button>
            </form>
        </div>
    );
}
//---------------------------------------------------------------------------------------------------------------------
export default InputComponent