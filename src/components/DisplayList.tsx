import React from "react";
import "../style.css";

interface listProps {
    id: number;
    description: string;
}

interface DisplayListProps {
    listOfItems: listProps[];
    //description: string;
}

const DisplayList: React.FC<DisplayListProps> = ({listOfItems}) => {
    return (
        <div> 
            <div>
                {listOfItems.map(listDes => <div>{listDes.description}</div>)}
            </div>
        </div>
    )
};


export default DisplayList;