/**
* @jest-environment jsdom
*/
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from '../FormInput';
 
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
        const addButton = screen.getByRole('inputbox')

        userEvent.type(FormInput, expectedUserInput);
        userEvent.type(screen.getByRole('textbox'), expectedUserInput);
        userEvent.click(addButton);
        //screen.debug();

        const checkText = await screen.findByText('Too many characters. Limit is 15.');
        expect(checkText).toBeInTheDocument();
        
    });
});

