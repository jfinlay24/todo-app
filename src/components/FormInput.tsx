import React, { useState } from 'react';

interface FormInputProp {
    addTask: any;
}

const FormInput: React.FC<FormInputProp> = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    );
};

export default FormInput;