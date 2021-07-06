import React, { useState } from "react"; 
import '../style.css';
import DisplayList from "./DisplayList";

interface TodoProps {
    todoHeading: string;
}

const Todo: React.FC<TodoProps> = (mes) => {
    const list = [
        {
            id: 1,
            description: "List item 1"
        },
        {
            id: 2,
            description: "List item 2"
        },
        {
            id: 3,
            description: "List item 3"
        }
    ]
    const listDes = list.filter(listDes => listDes.description);
    console.log(listDes[0]);

    return (
        <div className="main">
            <header className="header">
            <input
                placeholder="Enter detail"
            />
            <DisplayList listOfItems={list} ></DisplayList>
            {/* selectedDes = {list.map(listDes => <div>{listDes.description}</div>)} */}
            </header>
        </div>
    );
}

export default Todo;