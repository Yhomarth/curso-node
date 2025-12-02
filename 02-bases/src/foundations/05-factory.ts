

interface buildMakePersonOptions {
    getUUID : () => string;
    getAge :  ( birthday :string ) => number;
}

interface PersonOptions {
    name : string;
    birthday : string;
}

export const buildMakePerson = ( {getUUID,  getAge}  : buildMakePersonOptions) => {

    return   ( {name, birthday} : PersonOptions) => {

    return {
        id : getUUID(),
        name,
        birthday,
        age : getAge(birthday)
    }

}

}

