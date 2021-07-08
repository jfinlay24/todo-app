import React from "react";
import "../style.css";

interface listProps {
    id: number;
    description: string;
}

interface RemainingListProps {
    listOfItems: listProps[];
}

const RemainingListCount: React.FC<RemainingListProps> = ({listOfItems}) => {
    return (
        <div> 
            <div>
                {listOfItems.length} task remaining
            </div>
        </div>
    )
};

export default RemainingListCount;