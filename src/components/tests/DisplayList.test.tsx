/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayList from '../DisplayList';

const listOfItems = [ {id:0 , description: 'item1'}, {id:1, description: 'item2'}];
const renderDisplayList = () => { 
    render( <DisplayList listOfItems={listOfItems}/> )

};

describe('DisplayList', () => {

    it('should render the correct number of items passed to it', () => {
        renderDisplayList();
        const listItems = screen.getAllByRole('listitem');

        console.log(listItems[0])
        
        expect( listItems.length).toBe(2);
    });


});
