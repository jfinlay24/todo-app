/**
* @jest-environment jsdom
*/
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from '../FormInput';
import { waitFor } from '@testing-library/react';
import "regenerator-runtime/runtime.js";
import '@testing-library/jest-dom';
 
const addTask = (userInput: any) => {
    
}

const listOfItems = [ {id:0 , description: 'item1', textDecor: 'clear'}, {id:1, description: 'item2', textDecor: 'line'}];
const renderFormInput = (list=listOfItems) => { 
     render( <FormInput addTask={addTask} listOfItems={list}/> )
 
};

describe('FormInput', () => {

    it('should display character limit error', async () => {
        renderFormInput();
        const expectedUserInput = "This input is too long.";
        const addButton = screen.getByRole('button');
        userEvent.type(screen.getByRole('textbox'), expectedUserInput);

        userEvent.click(addButton);

        await waitFor(() => {
            const checkText = screen.queryByText('Too many characters. Limit is 15.');
            expect(checkText).toBeInTheDocument();
        })
    });

    it('should display enter an item error when user submits empty textbox', async () => {
        renderFormInput();
        const userInput = "";
        const addButton = screen.getByRole('button');
        userEvent.type(screen.getByRole('textbox'), userInput);

        userEvent.click(addButton);

        await waitFor(() => {
            const checkText = screen.queryByText('Please enter an item.');
            expect(checkText).toBeInTheDocument();
        })
    });

    it('should display a duplicated item error when user submits duplicate item', async () => {
        renderFormInput([{id:0 , description: 'item1', textDecor: 'clear'}]);
        const userInput = "item1";
        const addButton = screen.getByRole('button');
        userEvent.type(screen.getByRole('textbox'), userInput);

        userEvent.click(addButton);

        await waitFor(() => {
            const checkText = screen.queryByText('Item already on list.');
            expect(checkText).toBeInTheDocument();
        })
    });
});
