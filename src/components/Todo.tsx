import React, { useState } from "react"; 
import '../style.css';
import DisplayList from "./DisplayList";
import RemainingListCount from "./RemainingTaskCount"
import FormInput from './FormInput';
import TodoListProps from '../TypescriptProps';

interface ListProps {
    list: TodoListProps[];
}

const Todo: React.FC<ListProps> = ({list}) => { //{list} would replace props so below doesn't look like props.list
    const [ toDoList, setToDoList ] = useState(list);
    const addTask = (userInput: string ) => {
        let copyList = [...toDoList];
        copyList = [...copyList, { id: toDoList.length + 1, description: userInput }];
        setToDoList(copyList);
    }
    return (
        <div className="main">
            <h1 className="headerTitle">Todo List</h1>
            <header className="header">
            <FormInput addTask={addTask} listOfItems={toDoList} />
            <RemainingListCount numberOfItems={toDoList.length}/>
            <DisplayList listOfItems={toDoList}/>
            </header>
        </div>
    );
}

export default Todo;
