/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 import FormInput from '../FormInput';
 
 const addTask = () => {

 }

 const listOfItems = [ {id:0 , description: 'item1', textDecor: 'clear'}, {id:1, description: 'item2', textDecor: 'line'}];
 const renderDisplayList = () => { 
     render( <FormInput addTask={addTask} listOfItems={listOfItems}/> )
 
 };

 describe('FormInput', () => {

    it('should return true on valid input', () => {
        renderDisplayList();
        //const listItems = screen.getAllByRole('listitem');
        const userInput = "Writing tests";
        const errorCheck = () => {
            if (!userInput.trim()){
                return false;
            }
            if (userInput.trim().length > 15){
                console.log(userInput.length);
                return false
            }
            // if (listOfItems.includes(userInput.trim())) {
            //     return false
            // }
            return true;
        }

        const isValid = errorCheck();
        expect(isValid).toBeTruthy();
        
    });

});

