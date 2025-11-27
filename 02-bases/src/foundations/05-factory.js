const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

const buildPerson =  ( {name, birthday}) => {

    return {
        id : uuidv4(),
        name,
        birthday,
        age : getAge(birthday)
    }

}

const obj = {
    name : 'John Doe',
    birthday : '1990-12-15'
}
 
const jhon = buildPerson(obj);

console.log(jhon);