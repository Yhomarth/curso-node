import { describe, expect, test } from '@jest/globals';
import { heroes } from '../../src/foundations/02-destructuring';

describe('js02-destructuring.ts File', () => {

    test('heroes array should contain Superman', ()=> {
        // Arrange
        const expectedHero = 'Superman';
        
        // Act
        const heroExists = heroes.includes(expectedHero);
        
        // Assert
        expect(heroExists).toBeTruthy();

    });

    test('heroes array should have length of 4', ()=> {
        // Arrange
        const expectedLength = 4;
        
        // Act
        const actualLength = heroes.length;
        
        // Assert
        expect(actualLength).toBe(expectedLength);

    });


    test('the first heroes should be Superman and the second Flash', ()=>{

        // Arrange
        const [firstHero, secondHero] = heroes;
        
        // Act
        // Assert
        expect(firstHero).toBe('Superman');
        expect(secondHero).toBe('Flash');

    }); 

});