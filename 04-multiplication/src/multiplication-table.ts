import { saveToFile } from './save-to-file';


export const displayMultiplicationTable = (number: number, limit: number): void => {


    console.log('===============================');
    console.log(`La tabla del ${number} `);
    let data = '';

    for (let i = 1; i <= limit; i++) {

        const result = number * i;
        console.log(`${number} x ${i} = ${result}`);
        data += `${number} x ${i} = ${result}\n`;
    }
    console.log('===============================');

    saveToFile(`table-${number}.txt`, data);


}