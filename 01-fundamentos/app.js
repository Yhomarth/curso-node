

const fs = require( 'fs' );

const data = fs.readFileSync( 'readme.MD', 'utf-8' );

console.log( data );

