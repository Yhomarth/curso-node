import { describe, expect, test } from '@jest/globals';
import { getPokemonNameById } from '../../src/foundations/06-promise';



describe('foundations / 06-promises', () => {

    test('getPokemonNameById should return the correct name', async()=>{

        // arrange
        const pokemonID = 1;

        // act 
        const pokemonName = await getPokemonNameById( pokemonID );

        // assert
        expect( pokemonName ).toBe( 'bulbasaur' );



    });

    test('should return an error if pokemon does not exist', async()=>{

        const invalidPokemonID = 999999;
        try {
            await getPokemonNameById( invalidPokemonID );
            expect( true ).toBeFalsy();
        } catch (error) {
            expect( error ).toBe( `Pokemon with ID ${ invalidPokemonID } not found` );
        }




    });


});