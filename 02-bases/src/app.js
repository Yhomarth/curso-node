
// const { getAge, getUUID } = require('./plugins');

// const { emailTemplate } = require('./foundations/01-template');
// require('./foundations/02-destructuring');
// const { getUserById } = require('./foundations/03-callbacks');
// const { getUserById } = require('./foundations/04-arrow');

/*
const getPokemonById = require('./foundations/06-promise');


getPokemonById(39)
    .then( name => console.log( {name}) )
    .catch( err => console.log( 'Pokemon no existe', err ) )
    .finally( () => console.log('done!!') );
*/

const  { buildLogger }  = require('./plugins');
const loger = buildLogger('app.js');
loger.log('mensaje de prueba');
loger.error('Esto es un error de prueba');


// ! referencia al patrón factory
/* 
const { buildMakePerson }  =require('./foundations/05-factory');

const makeAPerson = buildMakePerson( getUUID, getAge );

const obj = {
    name : 'John Doe',
    birthday : '1991-12-15'
}

const jhon = makeAPerson(obj);

console.log(jhon);

*/
