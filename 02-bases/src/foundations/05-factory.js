const { getUUID, getAge } = require('../plugins/');

const buildPerson =  ( {name, birthday}) => {

    return {
        id : getUUID(),
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