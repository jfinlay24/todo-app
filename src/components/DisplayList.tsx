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
    const [, setUpdatedList] = useState(listOfItems);

    const handleOnChange = (checkedId: number) => {
        let copyList = [...listOfItems];
        copyList[checkedId -1].textDecor === 'clear' ? copyList[checkedId -1].textDecor = 'line' : copyList[checkedId -1].textDecor = 'clear';
        setUpdatedList(copyList);
    };
    return (
        <div>
            <label>
                {listOfItems.map(({ id, description, textDecor }) => {
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
