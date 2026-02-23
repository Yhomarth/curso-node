import { yarg } from './config/plugins/args.plugin';
import { displayMultiplicationTable } from './multiplication-table';

(async ()=> {
    await main();
    

})();

async function main() {
     
     if (yarg.show) {

        const { base, limit } = yarg;

         displayMultiplicationTable(base as number, limit as number);
     }
}


