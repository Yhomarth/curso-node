import { describe, test, expect } from '@jest/globals';

// A A A

describe('Test in App.ts File', () => {
  
    test('Should to be 12', () => {

        // Arrange
        const num1 = 8;
        const num2 = 4;

        // Act
        const result = num1 + num2;

        // Assert
        expect(result).toBe(12);


  
    });
    
});