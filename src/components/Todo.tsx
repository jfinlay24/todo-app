import React, { useState } from "react"; 
import '../style.css';
import DisplayList from "./DisplayList";
import RemainingListCount from "./RemainingTaskCount"
import FormInput from './FormInput';
import TodoListProps from '../TypescriptProps';

interface ListProps {
    list: TodoListProps[];
}

const Todo: React.FC<ListProps> = ({list}) => {

    const [ toDoList, setToDoList ] = useState(list);

    const addTask = (userInput: any ) => {
        if(!userInput) {
            //alert("Please enter a task");
            return false;
        }
        else {
            let copyList = [...toDoList];
            copyList = [...copyList, { id: toDoList.length + 1, description: userInput, textDecor: "clear" }];
            setToDoList(copyList);
        }
    }
    return (
        <div className="main">
            <h3 className="title"> ToDo List </h3> 
            <div className="formdisplay">
            <FormInput addTask={addTask} listOfItems={toDoList}/>
            <RemainingListCount numberOfItems={toDoList.length}></RemainingListCount>
            <DisplayList listOfItems={toDoList} ></DisplayList>
            </div>
        </div>
    );
}

export default Todo;
