import React from "react";
import "../style.css";

interface RemainingListProps {
    numberOfItems: number;
}

const RemainingListCount: React.FC<RemainingListProps> = ({numberOfItems}) => {
    return (
        <div> 
            <div>
                {numberOfItems} task remaining
            </div>
        </div>
    )
};

export default RemainingListCount;