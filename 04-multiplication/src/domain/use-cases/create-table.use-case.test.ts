import { describe, expect, test } from '@jest/globals';
import { CreateTable } from './create-table.use-case';

describe('Testing CreateTableUseCase', () => {

    test('should create a table with default values', ()=> {

        const createTable = new CreateTable();
        const table = createTable.excecute({ base: 2 });

        const rows = table.split('\n').length;

        expect( createTable ).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2');
        expect(table).toContain('2 x 10 = 20');
        expect(rows).toBe(12); // 10 rows + header + separator 


    });

    test('should create a table with custom limit', ()=> {

        const options = { base: 4, limit: 20 };
        const createTable = new CreateTable();
        const table = createTable.excecute(options);

        const rows = table.split('\n').length;

        expect( createTable ).toBeInstanceOf(CreateTable);
        expect(table).toContain('4 x 1 = 4');
        expect(table).toContain('4 x 20 = 80');
        expect(rows).toBe(22); // 20 rows + header + separator 


    });

    
});