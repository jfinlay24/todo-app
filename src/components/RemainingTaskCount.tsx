import React from "react";
import "../style.css";

interface RemainingTaskProps {
    numberOfItems: number;
}

const RemainingTaskCount: React.FC<RemainingTaskProps> = ({numberOfItems}) => {
    return (
        <div> 
            <div>
                {numberOfItems} task remaining
            </div>
        </div>
    )
};

export default RemainingTaskCount;
