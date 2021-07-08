import React, { useState } from "react"; 
import '../style.css';
import DisplayList from "./DisplayList";
import RemainingListCount from "./RemainingTaskCount"

interface TodoListProps {
    id: number;
    description: string;
}

interface ListProps {
    list: TodoListProps[];
}

const Todo: React.FC<ListProps> = ({list}) => { //{list} would replace props so below doesn't look like props.list
    return (
        <div className="main">
            <header className="header">
            <input
                placeholder="Enter detail"
            />
            <RemainingListCount numberOfItems={list.length}></RemainingListCount>
            <DisplayList listOfItems={list} ></DisplayList>
            </header>
        </div>
    );
}

export default Todo;