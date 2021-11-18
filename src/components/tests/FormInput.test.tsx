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
const renderFormInput = () => { 
     render( <FormInput addTask={addTask} listOfItems={listOfItems}/> )
 
};

describe('FormInput', () => {

    it('should display character limit error', async () => {
        renderFormInput();
        const expectedUserInput = "This input is too long.";
        const addButton = screen.getByRole('button');

        userEvent.type(screen.getByRole('textbox'), expectedUserInput);
        userEvent.click(addButton);
        //screen.debug();

        await waitFor(() => {
            const checkText = screen.queryByText('Too many characters. Limit is 15.');
            expect(checkText).toBeInTheDocument();
        })
    });

    it('should display enter an item error', async () => {
        renderFormInput();
        const expectedUserInput = "";
        const addButton = screen.getByRole('button');

        userEvent.type(screen.getByRole('textbox'), expectedUserInput);
        userEvent.click(addButton);
        //screen.debug();

        await waitFor(() => {
            const checkText = screen.queryByText('Please enter an item.');
            expect(checkText).toBeInTheDocument();
        })
    });

    it('should display a duplicated item error', async () => {
        renderFormInput();
        const expectedUserInput = "item1";
        const addButton = screen.getByRole('button');

        userEvent.type(screen.getByRole('textbox'), expectedUserInput);
        userEvent.click(addButton);
        //screen.debug();

        await waitFor(() => {
            const checkText = screen.queryByText('Item already on list.');
            expect(checkText).toBeInTheDocument();
        })
    });
});

