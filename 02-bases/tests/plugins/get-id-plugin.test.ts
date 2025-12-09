import { describe, test, expect } from '@jest/globals';
import { getUUID } from '../../src/plugins/get-id-plugin';

describe('plugins / get-id-plugin', () => {

    test('getUUID should return a string', () => {
        expect(typeof getUUID()).toBe('string');
    });

    test('getUUID should return 36 characters', () => {
        expect(getUUID().length).toBe(36);
    });

});