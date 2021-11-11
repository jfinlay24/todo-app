import React, { useState } from 'react';
//import TodoListProps from '../TypescriptProps';

// interface FormInputProp {
//     addTask: (userInput: string ) => void;
//     listOfItems: TodoListProps[];
// }

interface listProps {
    id: number;
    description: string;
    textDecor: string //try out enum
}

interface FormInputProp {
    addTask: (userInput: string ) => void;
    listOfItems: listProps[];
}

const FormInput: React.FC<FormInputProp> = ({ addTask, listOfItems }) => {
    const [ userInput, setUserInput ] = useState('');
    const [ inputError, setInputError ] = useState('');
    let listCheck = listOfItems.map(listDes => listDes.description);
    const errorCheck = () => {
        if (!userInput.trim()){
            setInputError("No blank spaces");//rephase
            return false;
        }
        if (listCheck.includes(userInput.trim())) {
            setInputError("Item already on list.");
            return false
        }
        if (userInput.trim().length > 15){
            setInputError("Too many characters. Limit is 15.");
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
            <div>
                <input className="inputbox" value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            </div>
            <div className="errorHeader">{inputError}</div>
            <div>
                <button className="inputbutton">Submit</button>
            </div>
        </form>
    );
};

export default FormInput;
