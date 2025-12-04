
import { describe, test, expect } from '@jest/globals';
import { buildMakePerson } from '../../src/foundations/05-factory';

describe('js05-factory.ts File', () => {

    const getUUID = () => 'ASDFG';
    const getAge = () => 35;
    const makePerson = buildMakePerson({ getUUID, getAge });

    test('buildMakePerson should return a function', () => {



        expect(makePerson).toBeInstanceOf(Function);
    });

    test('makePerson should return a person', () => {

        const yhomarth = makePerson({ name: 'Yhomarth', birthday: '1986-09-12' });

        expect(yhomarth).toEqual({
            id: 'ASDFG',
            name: 'Yhomarth',
            birthday: '1986-09-12',
            age: 35
        });

    });

});