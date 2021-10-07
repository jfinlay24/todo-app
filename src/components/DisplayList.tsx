import React, { useState } from "react";
import "../style.css";

interface listProps {
    id: number;
    description: string;
    checked: boolean,
    textDecor: string //try out enum
}

interface DisplayListProps {
    listOfItems: listProps[];
}

const DisplayList: React.FC<DisplayListProps> = ({ listOfItems }) => {
    const [checkedState, setCheckedState] = useState(new Array(listOfItems.length).fill(false));

    // const handleOnChange = (e: { currentTarget: { value: React.SetStateAction<number>; }; }) => {
        
    // }

    const handleOnChange = (checkedValue: number) => {
        let item = listOfItems[checkedValue];
        // {!item.checked ? item.checked = false : item.checked = true}
        console.log(listOfItems);
        const updatedCheckedState = checkedState(() =>
            !item.checked ? item.checked = false : item.checked = true
        );
        setCheckedState(updatedCheckedState);
    };
    return (
        <div>
            <label>
                {listOfItems.map(({ id, description, checked, textDecor }) => {
                    return (
                        <div key={id}>
                            <div>
                                <li className={textDecor}>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${id}`}
                                        name={description}
                                        value={description}
                                        onChange={() => handleOnChange(id)}
                                        //checked={checked}
                                    />
                                    <label htmlFor={`custom-checkbox-${id}`}>{description}</label>
                                </li>
                            </div>
                        </div>
                    );
                })}
            </label>
        </div>
    )
};

export default DisplayList;
