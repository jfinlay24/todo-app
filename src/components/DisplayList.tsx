import React from "react";
import "../style.css";

interface listProps {
    id: number;
    description: string;
    checked: boolean,
    textDecor: string
}

interface DisplayListProps {
    listOfItems: listProps[];
}

const DisplayList: React.FC<DisplayListProps> = ({ listOfItems }) => {
    return (
        <div>
            <label>
                {listOfItems.map(({ id, description, checked }) => {
                    return (
                        <li key={id}>
                            <div>
                                <li className={listOfItems[id].textDecor}>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${id}`}
                                        name={description}
                                        value={description}
                                        checked={checked}
                                    />
                                    <label htmlFor={`custom-checkbox-${id}`}>{description}</label>
                                </li>
                            </div>
                        </li>
                    );
                })}
            </label>
        </div>
    )
};

export default DisplayList;
