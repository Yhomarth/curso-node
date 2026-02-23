import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(process.argv)
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base of the multiplication table'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limit of the multiplication table'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show the multiplication table in console'
})
.parseSync();