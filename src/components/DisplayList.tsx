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
    const [updatedList, setUpdatedList] = useState(listOfItems);

    const handleOnChange = (checkedId: number) => {
        let copyList = [...listOfItems];
        let decorArr = copyList[checkedId -1].textDecor === 'clear' ? copyList[checkedId -1].textDecor = 'line' : copyList[checkedId -1].textDecor = 'clear';
        setUpdatedList(copyList);
        console.log(decorArr);

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
