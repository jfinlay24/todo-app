import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import RemainingTaskCount from '../RemainingTaskCount';
import { waitFor } from '@testing-library/react';
import "regenerator-runtime/runtime.js";
import '@testing-library/jest-dom';

const listOfItems = [ {id:0 , description: 'item1', textDecor: 'clear'}, {id:1, description: 'item2', textDecor: 'line'}];
const renderRemainingTaskCount = (list=listOfItems) => { 
     render( <RemainingTaskCount numberOfItems={list.length}/> )
 
};

describe('RemainingTaskCount', () => {

    it('should display the correct number of tasks remaining', () => {
        const listOfItems = [ {id:0 , description: 'item1', textDecor: 'clear'}, {id:1, description: 'item2', textDecor: 'line'}];
        renderRemainingTaskCount(listOfItems);
        
        const actualRemainingTasks = screen.getByText("2 task remaining")

        expect(actualRemainingTasks).toHaveTextContent("2 task remaining");
    });
});
