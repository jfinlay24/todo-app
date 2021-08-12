import React, { useState } from 'react';
import TodoListProps from '../TypescriptProps';

interface FormInputProp {
    addTask: any;
    listOfItems: TodoListProps[];
}

const FormInput: React.FC<FormInputProp> = ({ addTask, listOfItems }) => {
    const [ userInput, setUserInput ] = useState('');
    const [ inputError, setInputError ] = useState('');
    let listCheck = listOfItems.map(listDes => listDes.description);
    const errorCheck = () => {
        if (!userInput.trim()){
            setInputError("No blank spaces");
            return false;
        }
        if (listCheck.includes(userInput.trim())) {
            setInputError("Item already on list.");
            return false
        }
        return true;
    }
    const handleChange = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const isValid = errorCheck();
        if(!isValid) {
        }
        else{
            setInputError('');
            addTask(userInput.trim());
        }
        setUserInput("");
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
