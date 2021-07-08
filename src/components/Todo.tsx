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

const Todo: React.FC<ListProps> = (list) => {
    console.log(list.list[0].description) //no idea why it's like this.
    return (
        <div className="main">
            <header className="header">
            <input
                placeholder="Enter detail"
            />
            <RemainingListCount listOfItems={list.list}></RemainingListCount>
            <DisplayList listOfItems={list.list} ></DisplayList>
            </header>
        </div>
    );
}

export default Todo;