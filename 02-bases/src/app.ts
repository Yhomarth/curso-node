// ! referencia a template strings
// import {emailTemplate } from './foundations/01-template';
// console.log( emailTemplate.replace('{{name}}', 'Yhomarth') );

//! referencia destructuring y variables de entorno
// import './foundations/02-destructuring';

//! referencia a funciones normales y flecha
// import { getUserById } from './foundations/04-arrow';
// getUserById(1, ( err ?: string, user ?: { id: number; name: string } ) => {

//     if(err){
//         console.log( err );
//         return;
//     }
//     console.log( { user } );
// });


// ! referencia a callbacks y funciones normales
// import { getUserById } from './foundations/03-callbacks';
// getUserById(2, ( err ?: string, user ?: { id: number; name: string } ) => {

//     if(err){
//         console.log( err );
//         return;
//     }

//     console.log( { user } );

// } );

// ! referencia a callbacks y funciones flecha
// import {getPokemonNameById} from './foundations/06-promise';
// getPokemonNameById(39)
//     .then( (name: string)  => console.log( {name}) )
//     .catch( (err: any) => console.log( 'Pokemon no existe', err ) )
//     .finally( () => console.log('done!!') );


// ! Esto es para probar el plugin de logger
// import  { buildLogger }  from './plugins/logger.plugin';
// const loger = buildLogger('app.js');
// loger.log('mensaje de prueba');
// loger.error('Esto es un error de prueba');


// ! referencia al patrón factory
// import  { buildMakePerson }  from './foundations/05-factory';
// import { getAge, getUUID } from './plugins'; 
// const makeAPerson = buildMakePerson( {getUUID, getAge} );

// const obj = {
//     name : 'John Doe',
//     birthday : '1991-12-01'
// }

// const jhon = makeAPerson(obj);
// console.log(jhon);

