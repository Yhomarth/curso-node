import { describe, test, expect } from '@jest/globals';
import { getUserById } from '../../src/foundations/03-callbacks';


describe('Foundations/03 - Callbacks', () => {

    test('getUserById should return an error if user not found', () => {

        //arrange
        const id = 10;

        //act
        getUserById(id, (err, user) => {

            //assert
            expect(err).toBe(`User with id ${id} not found`);
            expect(user).toBeUndefined();

        });

    });


    test('getUserById should return Alice in user 1', () => {

        //arrange 
        const id = 1;
        const expectedUser = { id: 1, name: 'Alice' };

        //act
        getUserById(id, (err, user) => {

            //assert
            expect(err).toBeUndefined();
            expect(user).toEqual(expectedUser);

        });

    });


});