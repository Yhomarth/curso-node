import { describe, test, expect } from '@jest/globals';
import { emailTemplate } from '../../src/foundations/01-template';

describe('js01-template.ts File', () => {

    test('emailTemplate should contain a greeting', () => {

        // Arrange
        const expectedText = 'Welcome to Our Service';

        // Act
        const result = emailTemplate;

        // Assert
        expect(result).toContain(expectedText);
    });

    test('emailTemplate should contain a placeholder for name', () => {

        // Arrange
        const expectedPlaceholder = '{{name}}';

        // Act
        const result = emailTemplate;

        // Assert
        expect(result).toContain(expectedPlaceholder);
    });

    test('emailTemplate should be a string', () => {

        // Arrange & Act
        const result = emailTemplate;

        // Assert
        expect(typeof result).toBe('string');
    });

    test('emailTemplate should contain HTML tags', () => {

        // Arrange
        const expectedTags = ['<div>', '</div>', '<h1>', '</h1>', '<p>', '</p>'];

        // Act
        const result = emailTemplate;

        // Assert
        expectedTags.forEach(tag => {
            expect(result).toContain(tag);
        });
    });

    test('emailTemplate should contain welcome message', () => {

        // Arrange
        const expectedMessage = "We're excited to have you on board";

        // Act
        const result = emailTemplate;

        // Assert
        expect(result).toContain(expectedMessage);
    });

});
