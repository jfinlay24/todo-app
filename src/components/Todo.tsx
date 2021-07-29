import React, { useState } from "react"; 
import '../style.css';
import DisplayList from "./DisplayList";
import RemainingListCount from "./RemainingTaskCount"
import FormInput from './FormInput';

interface TodoListProps {
    id: number;
    description: string;
}

interface ListProps {
    list: TodoListProps[];
}

const Todo: React.FC<ListProps> = ({list}) => { //{list} would replace props so below doesn't look like props.list
    const [ toDoList, setToDoList ] = useState(list);
    const addTask = (userInput: any ) => {
        let copyList = [...toDoList];
        copyList = [...copyList, { id: toDoList.length + 1, description: userInput }];
        setToDoList(copyList);
    }
    return (
        <div className="main">
            <header className="header">
            <FormInput addTask={addTask}/>
            <RemainingListCount numberOfItems={toDoList.length}/>
            <DisplayList listOfItems={toDoList}/>
            </header>
        </div>
    );
}

export default Todo;