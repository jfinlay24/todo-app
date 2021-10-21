/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayList from '../DisplayList';

const listOfItems = [ {id:0 , description: 'item1', textDecor: 'clear'}, {id:1, description: 'item2', textDecor: 'line'}];
const renderDisplayList = () => { 
    render( <DisplayList listOfItems={listOfItems}/> )

};

describe('DisplayList', () => {

    it('should render the correct number of items passed to it', () => {
        renderDisplayList();
        const listItems = screen.getAllByRole('listitem');
        
        expect( listItems.length).toBe(2);
    });


});

describe('DisplayList', () => {

    it('should list the number of items without a strikethrough', () => {
        renderDisplayList();
        const listItems = screen.getAllByRole('listitem');
        let strikethroughValue = 0
        for(let i = 0; i < listItems.length; i++) {
            if(listOfItems[i].textDecor === "line"){
                strikethroughValue =+ 1;
            }
        }
        expect(strikethroughValue).toEqual(1);
    });

});

describe('DisplayList', () => {

    it('should correctly display text in first todo item', () => {
        renderDisplayList();
        expect(listOfItems[0].description).toContain('item1');
    });

});
