import { httpClient as http } from '../plugins'


export const getPokemonNameById = async ( id : number | string ):Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get( url );    
    return pokemon.name;
   
}
