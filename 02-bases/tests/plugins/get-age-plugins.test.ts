import { describe, test, expect } from '@jest/globals';

import { getAge } from '../../src/plugins/get-age-plugin';

describe('plugins / get-age-plugin', () => {

    test('getAge should return a number', () => {
        // arrange
        const birthDate = '1990-01-01';
        // act
        const age = getAge(birthDate);
        // assert
        expect(typeof age).toBe('number');
    });


    test('getAge should return the correct age', () => {
        // arrange
        const birthDate = '2000-01-01';
        const expectedAge = new Date().getFullYear() - new Date(birthDate).getFullYear();
        // act
        const age = getAge(birthDate);
        // assert
        expect(age).toBe(expectedAge);
    });

    test('getAge should throw an error if birthday is not provided', () => {
        // arrange
        const birthDate = '';

        // act
        const callGetAge = () => getAge(birthDate);

        // assert
        expect(callGetAge).toThrow('Birthday is required to calculate age');


    });

    
});

