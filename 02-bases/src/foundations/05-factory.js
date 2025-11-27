

const buildPerson =  ( {name, birthday}) => {

    return {
        id : new Date().getTime(),
        name,
        birthday,
        age : new Date().getFullYear() - new Date(birthday).getFullYear()
    }

}

const obj = {
    name : 'John Doe',
    birthday : '1990-12-15'
}
 
const jhon = buildPerson(obj);

console.log(jhon);