import React, { useState } from "react"; 
import '../style.css';
import DisplayList from "./DisplayList";

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
            <DisplayList listOfItems={list.list} ></DisplayList>
            </header>
        </div>
    );
}

export default Todo;