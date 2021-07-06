import React from "react";
import "../style.css";

interface listProps {
    id: number;
    description: string;
}

interface DisplayListProps {
    listOfItems: listProps[];
}

const DisplayList: React.FC<DisplayListProps> = ({listOfItems}) => {
    return (
        <div> 
            <div>
                {listOfItems.map(listDes => <li className="a">{listDes.description}</li>)}
            </div>
        </div>
    )
};


export default DisplayList;