// const getAgePlugin = require('get-age');

export const getAge = (birthday : string) : number => {

    if(!birthday) {
        throw new Error('Birthday is required to calculate age');
    }

    //return getAgePlugin(birthday);
    return new Date().getFullYear() - new Date(birthday).getFullYear();
}

