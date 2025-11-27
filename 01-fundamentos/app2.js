

const fs = require( 'fs' );

const content = fs.readFileSync( 'README.md', 'utf-8' );

const wordCount = content.split(' ').length;
const words = content.split(' ');

const reactCount = words.filter (  word => word.toLowerCase() === 'react'  )

console.log('palabras : ', wordCount );
console.log('React Word : ', reactCount.length );