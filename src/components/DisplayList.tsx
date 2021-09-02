import React from "react";
import "../style.css";

export interface listProps {
    id: number;
    description: string;
}

export interface DisplayListProps {
    listOfItems: listProps[];
}

const DisplayList: React.FC<DisplayListProps> = ({listOfItems}) => {
    return (
        <div> 
            <div>
                {listOfItems.map(listDes => <li className="a" key={listDes.description}>{listDes.description}</li>)}
            </div>
        </div>
    )
};

export default DisplayList;