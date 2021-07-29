import React, { useState } from 'react';

interface FormInputProp {
    addTask: any;
}

const FormInput: React.FC<FormInputProp> = ({ addTask }) => {
    const [ userInput, setUserInput ] = useState('');
    const [ inputError, setInputError ] = useState('');
    const errorCheck = () => {
        if (!userInput) {
            setInputError("No blank spaces");
            return false;
        }
        // if (userInput === fullList) {
        //     setInputError("Item already on list.");
        // }
        return true;
    }
    const handleChange = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const isValid = errorCheck();
        if(!isValid) {
            setUserInput("");
        }
        else{
            setInputError('');
            addTask(userInput);
            setUserInput("");
        }
    } 
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <div className="errorHeader">{inputError}</div>
            <button>Submit</button>
        </form>
    );
};

export default FormInput;