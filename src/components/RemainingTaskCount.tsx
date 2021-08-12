import React from "react";
import "../style.css";

interface RemainingListProps {
    numberOfItems: number;
}

const RemainingListCount: React.FC<RemainingListProps> = ({numberOfItems}) => {
    return (
        <div> 
            <div className="listdisplay">
                {numberOfItems} task remaining
            </div>
        </div>
    )
};

export default RemainingListCount;
